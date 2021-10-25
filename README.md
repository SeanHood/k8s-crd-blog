# Cursed

The cursed idea of using Kubernetes as the backend for a blogging platform.

Basic idea is that blog posts are stored in `BlogPost` CRDs. The frontend is written using SveltKit, it calls the API server to fetch the posts.

## Up and running

1. Apply CRDs
```
kubectl apply -f yaml/crd.yaml
```

1. Apply Posts
```
kubectl apply -f yaml/posts.yaml
```

1. Start Kube Proxy (I haven't figured CORS)
```
kubectl proxy --port=8080
```

1. Start Svelte Dev Server
```
yarn && yarn run dev
```