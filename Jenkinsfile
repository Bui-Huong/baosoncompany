pipeline {
    agent { 
        label 'baoson'
    }
    
    environment {
        DOCKER_REGISTRY = 'mdngphg411'
        IMAGE_NAME = 'baosoncompany'
        CONTAINER_NAME = 'baoson'
    }
    
    stages {
        stage('Checkout Code') {
            steps {
                // Checkout the code from the repository
                git branch: 'main', changelog: false, poll: false, url: 'https://github.com/Bui-Huong/baosoncompany.git'
            }
        }
        
        stage('Cleanup Docker') {
            steps {
                sh '''
                    # Stop and remove existing container if it exists
                    docker stop ${CONTAINER_NAME} || true
                    docker rm ${CONTAINER_NAME} || true
                    
                    # Remove old image if it exists
                    docker rmi ${DOCKER_REGISTRY}/${IMAGE_NAME}:latest || true
                    # Prune build 
                    docker builder prune -f
                '''
            }
        }
        
        stage('Build and Push Image') {
            steps {
                sh '''
                    # Build the Docker image
                    docker build --no-cache -t ${DOCKER_REGISTRY}/${IMAGE_NAME}:latest .
                    
                    # Push to registry
                    # Khi nào image thay đổi nhiều thì hãy push để lưu trữ, vì downtime khi push phải hơn 10 phút 
                    # docker push ${DOCKER_REGISTRY}/${IMAGE_NAME}:latest || true 
                '''
            }
        }
        
        stage('Run Container') {
            steps {
                sh '''
                    # Run the new container
                    docker run -d \
                        --name ${CONTAINER_NAME} \
                        -p 8686:80 \
                        ${DOCKER_REGISTRY}/${IMAGE_NAME}:latest
                '''
            }
        }
    }
    
    post {
        // always {
        //      cleanWs()
        // }
        failure {
            echo 'Pipeline failed!'
        }
        success {
            echo 'Pipeline succeeded!'
        }
    }
}
