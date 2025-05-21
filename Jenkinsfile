pipeline {
    agent any

    environment {
        DOCKER_IMAGE = "hariharan1112"
        DOCKER_TAG = "latest"
    }

    stages {
        stage('Checkout Code') {
            steps {
                echo '📥 Checking out code...'
                git branch: 'main', url: 'https://github.com/HARIHARANJAYARAJ/hii1.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                echo '📦 Installing dependencies...'
                sh 'npm install'
            }
        }

        stage('Build Project') {
            steps {
                echo '🏗️ Building the project...'
                sh 'npm run build'
            }
        }

        stage('Build Docker Image') {
            steps {
                echo '🐳 Building Docker image...'
                sh "docker build -t $DOCKER_IMAGE:$DOCKER_TAG ."
            }
        }

        stage('Deploy with Docker Compose') {
            steps {
                echo '🚀 Deploying application using Docker Compose...'
                sh 'docker-compose up -d'
            }
        }
    }

    post {
        always {
            echo '✅ Pipeline finished execution.'
        }
        success {
            echo '🎉 Deployment successful!'
        }
        failure {
            echo '❌ Deployment failed!'
        }
    }
}
