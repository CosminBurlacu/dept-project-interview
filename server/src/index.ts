import server from "./app";

const port = process.env.PORT || 9400;

const main = () => {
    server.listen(port, () => {
        console.log(`The application is running on port ${port}`);
    });
};
 
main();