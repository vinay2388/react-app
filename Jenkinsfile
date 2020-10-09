// test
pipeline {
    agent any
    stages {
        
         stage ('Artifactory configuration') {
            steps {
                rtServer (
                    // id: "central",
                    // url: "http://artifactory-aminsayogms.dev.stacklynx.com/artifactory",
                    // credentialsId: "bitbucket"
                    def server = Artifactory.server 'central'
                )
                

                rtMavenDeployer (
                    id: "MAVEN_DEPLOYER",
                    serverId: "central",
                    releaseRepo: "aero-repo",
                    snapshotRepo: "aero-repo"
                )

            }

        }

        stage ('Exec Maven') {
            steps {
                rtMavenRun (
                    tool: 'maven3.6.3', // Tool name from Jenkins configuration
                    deployerId: "MAVEN_DEPLOYER",
                    //resolverId: "MAVEN_RESOLVER"
                )
            }
            steps{
                 sh 'npm install'
            }
            steps{
                sh 'npm run build'
            }
        }

        stage ('Publish build info') {
            steps {
                rtPublishBuildInfo (
                    serverId: "central"
                )
            }
        }
    }
}