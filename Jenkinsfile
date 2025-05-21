pipeline {
    agent any

    stages {
        stage('Build Docker Image') {
            steps {
                echo '🐳 Building Docker image...'
                sh 'docker build -t my-app-image .'
            }
        }

        stage('Run Docker Container') {
            steps {
                echo '🚀 Running Docker container...'
                sh 'docker run -d -p 3000:3000 my-app-image'
            }
        }
    }
}
