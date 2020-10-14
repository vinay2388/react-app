// test
pipeline {
    agent any
    // agent {
    //     docker {
    //         image 'node:6-alpine'
    //         args '-p 3000:3000'
    //     }
    // }
    tools {nodejs "nodejs"}
    // environment {
    //     CI = 'true' 
    // }
    stages {
        
         stage ('Artifactory configuration') {
            steps {
                rtServer (
                    // id: "central",
                    // url: "http://artifactory-aminsayogms.dev.stacklynx.com/artifactory",
                    // credentialsId: "bitbucket"
                    def server = Artifactory.server 'central1'
                )
                rtNpmResolver (
                    id: "NPM_RESOLVER",
                    serverId: "central1",
                    repo: "aero-repo"
                )

                rtNpmDeployer (
                    id: "NPM_DEPLOYER",
                    serverId: "central1",
                    repo: "aero-repo"
                )

            }

        }

        // stage ('Exec Maven') {
            
        //        steps {
        //         rtNpmInstall (
        //             tool: "nodejs", // Tool name from Jenkins configuration
        //             // path: "source",
        //             resolverId: "NPM_RESOLVER"
        //         )
        //     }
            
            
            
        // }
        stage('install'){
            steps{
                sh 'npm install'
            }
        }
        stage ('build'){
            steps{
                sh 'npm run build'
            }
        }
        // stage ('package'){
        //     steps{
        //         sh 'sudo apt-get install'
        //         // sh 'apt-get update'
        //         sh 'sudo apt-get install -y zip unzip'
        //         sh 'zip -r package.zip package.json'
        //     }
        // }
        // stage ('Publish build info') {
        //     steps {
        //         rtPublishBuildInfo (
        //             serverId: "central"
        //         )
        //         // rtMavenRun (
        //         //     // tool: 'maven3.6.3', // Tool name from Jenkins configuration
        //         //     deployerId: "MAVEN_DEPLOYER",
        //         //     //resolverId: "MAVEN_RESOLVER"
        //         // )
        //     //     rtPublishBuildInfo (
        //     //     URL : "central".ARTIFACTORY_URL
        //     // // repository {
        //     //     // releaseRepo: "aero-repo",
        //     //     // snapshotRepo: "aero-repo"
        //     //     Username : "admin"
        //     //     Password : "Password"
        //     //     // }
        //     //     )
        //     // rtUpload (
        //     //     serverId: 'central',
        //     //     specPath: 'path/to/spec/relative/to/workspace/spec.json',
 
        //     // )
        //     }
        // }
        // stage ('Exec npm publish') {
        //     steps {
        //         rtNpmPublish (
        //             tool: "nodejs", // Tool name from Jenkins configuration
        //             // path: "npm-example",
        //             deployerId: "NPM_DEPLOYER"
        //         )
        //     }
        // }
        stage ('Publish build info') {
            steps {
                rtPublishBuildInfo (
                    serverId: "central1"
                )
            }
        }
    }
}