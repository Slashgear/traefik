module.exports = {
    title: 'Traefik',
    description: 'Traefik Documentation',
    base: '/traefik/',
    themeConfig: {
        sidebar: [
            ['/', 'Getting Started'],
            ['/basics.md', 'Basics'],
            {
                title: 'Configuration',
                children: [
                    ['/configuration/commons.md', 'Commons'],
                    ['/configuration/logs.md', 'Logs'],
                    ['/configuration/entrypoints.md', 'EntryPoints'],
                    ['/configuration/acme.md', 'Let\'s Encrypt'],
                    ['/configuration/api.md', 'API / Dashboard'],
                    ['/configuration/backends/boltdb.md', 'BoltDB'],
                    ['/configuration/backends/consul.md', 'Consul'],
                    ['configuration/backends/consulcatalog.md', 'Consul Catalog'],
                    ['configuration/backends/docker.md', 'Docker'],
                    ['configuration/backends/dynamodb.md', 'DynamoDB'],
                    ['configuration/backends/ecs.md', 'ECS'],
                    ['configuration/backends/etcd.md', 'Etcd'],
                    ['configuration/backends/eureka.md', 'Eureka'],
                    ['configuration/backends/file.md', 'File'],
                    ['configuration/backends/kubernetes.md', 'Kubernetes Ingress'],
                    ['configuration/backends/marathon.md', 'Marathon'],
                    ['configuration/backends/mesos.md', 'Mesos'],
                    ['configuration/backends/rancher.md', 'Rancher'],
                    ['configuration/backends/rest.md', 'Rest'],
                    ['configuration/backends/servicefabric.md', 'Azure Service Fabric'],
                    ['configuration/backends/zookeeper.md', 'Zookeeper'],
                    ['configuration/ping.md', 'Ping'],
                    ['configuration/metrics.md', 'Metrics'],
                    ['configuration/tracing.md', 'Tracing'],
                ]
            },
            {
                title: 'User Guides',
                children: [
                    ['user-guide/examples.md', 'Configuration Examples'],
                    ['user-guide/swarm-mode.md', 'Swarm Mode Cluster'],
                    ['user-guide/swarm.md', 'Swarm Cluster'],
                    ['user-guide/docker-and-lets-encrypt.md', 'Let\'s Encrypt & Docker'],
                    ['user-guide/kubernetes.md', 'Kubernetes'],
                    ['user-guide/marathon.md', 'Marathon'],
                    ['user-guide/kv-config.md', 'Key-value Store Configuration'],
                    ['user-guide/cluster.md', 'Clustering/HA'],
                    ['user-guide/grpc.md', 'gRPC Example'],
                    ['user-guide/cluster-docker-consul.md', 'Traefik cluster example with Swarm']
                ]
            },
        ],
    }
};
