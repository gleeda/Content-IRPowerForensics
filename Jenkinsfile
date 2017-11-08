@Library('common-jenkins@bkfixes') _

timestamps {
  slave('windows10', '6.11.5') {
    stage('checkout') {
      checkout scm
    }

    stage('npm') {
      shell 'npm install'
    }

    stage('build') {
      grunt 'build'
      archiveArtifacts artifacts: 'build/**'
    }

    stage('test') {
      grunt 'test'
    }

    // TODO: publish
  }
}
