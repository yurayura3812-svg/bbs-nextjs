## Next.js + Supabase + Prisma 掲示板アプリケーション
Next.jsをベースに、Supabaseと Prisma を組み合わせた掲示板（ブログ）アプリケーションです。
最新のバージョンによるインフラ接続問題を解決し、データベース連携を実現しました。

### 技術スタック
Framework: Next.js

UI Component: shadcn/ui

Database: Supabase (PostgreSQL)

ORM: Prisma 6

### ベースにした教材動画
参考動画: [Next.js14で掲示板Webアプリケーションを作ってみよう【Supabase/react-hook-form/zod/shadcnを利用】](https://www.youtube.com/watch?v=8b6iqmo_2Os)

動画内の実装手順をインプットした上で、手元の最新環境への書き換えと独自のエラー解決を行いました。

### トラブルシューティング（解決した課題）
1.Prismaのmigrationが終わらない問題</br>
npx prisma migrate dev --name init 実行時に通信がフリーズする現象が発生したため、調査を行い下記の先行事例を参考にしました。</br>
参考文献: [Supabase + Prisma で migrate がタイムアウトする時の対処法 - Qiita (Kengo2003氏)](https://qiita.com/Kengo2003/items/be55b931f22e87010436)</br>
Supabase 側の設定を Transaction model から Session model（ポート 5432）へ切り替えることで解消し同期を成功させました。
