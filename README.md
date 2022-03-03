# intern-angular-sample

コンテナ起動

```
$ docker-compose up
```

コンテナに入る

```
$ docker-compose exec angular bash
```

ライブラリのインストール(コンテナ初回起動時)

```
$ npm install
```

Angular 起動

```
ng serve --host 0.0.0.0
```

イメージのビルドとコンテナの起動

```
docker-compose up --build
```
