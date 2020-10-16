if [ $environment = "production" ]; then
    echo "production"
    npm run build
    serve -s build
elif [ $environment = "development" ]; then
    echo "development"
fi