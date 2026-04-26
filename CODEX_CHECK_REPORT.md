# Codex 本機檢查報告

## 1. 變更內容

- 新增 blog 文章：`_posts/2026-04-20-nstc-project-approved.md`
- 新增 highlight marker：`_highlight_post/2026-04-20-nstc-project-approved.md`
- 從企劃書 PDF 抽出並新增三張文章圖片：
  - `images/blog/nstc-object-recognition/figure-1-framework.png`
  - `images/blog/nstc-object-recognition/figure-4-concept-metamer.png`
  - `images/blog/nstc-object-recognition/figure-6-training-data.png`
- 更新 `Gemfile.lock`，讓 Windows Ruby 3.2 UCRT 環境使用較新的可用 native gem binary：
  - `nokogiri` 更新為 `1.14.5 (x64-mingw-ucrt)`
  - `ffi` 更新為 `1.17.4 (x64-mingw-ucrt)`
  - `google-protobuf` 更新為 `3.25.8 (x64-mingw-ucrt)`
- Jekyll build 重新產生 `_site/` 本機輸出。

## 2. 套用的環境修正

- 設定 PowerShell 環境：
  - `Path` 前綴加入 `C:\Ruby32-x64\msys64\ucrt64\bin;C:\Ruby32-x64\bin;`
  - `RUBY_DLL_PATH` 設為 `C:\Ruby32-x64\msys64\ucrt64\bin`
- 已確認 Ruby 來源正確：
  - `ruby 3.2.11 [x64-mingw-ucrt]`
  - `C:\Ruby32-x64\bin\ruby.exe`
- 已確認 `libcurl-4.dll` 與 `libcurl.dll` 都存在。
- 嘗試執行 `pacman -S --needed` 時遇到 MSYS2 database lock 權限問題，但後續用 `pacman -Q` 確認必要套件已安裝：
  - `mingw-w64-ucrt-x86_64-curl`
  - `mingw-w64-ucrt-x86_64-libxml2`
  - `mingw-w64-ucrt-x86_64-libxslt`
- 清除 Bundler problematic config：
  - `bundle config unset build.nokogiri`
  - `bundle config unset --global build.nokogiri`
  - `bundle config unset force_ruby_platform`
  - `bundle config unset --global force_ruby_platform`
- 執行：
  - `bundle lock --add-platform x64-mingw-ucrt`
  - `bundle update nokogiri ffi google-protobuf --conservative`

## 3. bundle check 結果

通過。

```text
The Gemfile's dependencies are satisfied
```

## 4. Jekyll build 結果

通過。

執行命令：

```powershell
bundle exec jekyll build
```

結果摘要：

```text
Configuration file: .../_config.yaml
Jekyll Feed: Generating feed for posts
done
```

## 5. Local server 啟動狀態

已啟動。

使用命令：

```powershell
bundle exec jekyll serve --livereload --host 127.0.0.1 --port 4000 --no-watch
```

HTTP 檢查結果：

```text
status=200
highlight_found=True
```

## 6. 已開啟網址

```text
http://127.0.0.1:4000/
```

已使用 `Start-Process "http://127.0.0.1:4000/"` 開啟系統預設瀏覽器。

補充：Codex in-app browser 嘗試開啟同一網址時，Windows 回傳 `存取被拒。 (os error 5)`，但系統預設瀏覽器已開啟，且本機 HTTP 檢查確認網站可存取。

## 7. 手動視覺檢查清單

- 首頁可以載入
- 導覽列可以點擊
- 中文字元顯示正確
- Blog 文章圖片可以載入
- 首頁 Highlights 顯示 `NSTC Research Project Approved`
- 無明顯 layout break

## 8. 建議 commit message

```text
Add NSTC project approval blog post
```
