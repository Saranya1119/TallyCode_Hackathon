// const express = require("express")
// const app = express()
// const bodyP = require("body-parser")
// // const compiler = require("compilex")
// // const options = { stats: true }
// // compiler.init(options)
// app.use(bodyP.json())
// app.use("/codemirror-5.65.17", express.static("/Users/ghorakavisaranya/Desktop/codingPlayground/codemirror-5.65.17"))
// app.use("/", function (req, res) {
//     res.sendFile("/Users/ghorakavisaranya/Desktop/codingPlayground/index.html")
// })

// app.listen(8000)













// const express = require("express")
// const app = express()
// const bodyP = require("body-parser")
// const compiler = require("compilex")
// const options = { stats: true }
// compiler.init(options)
// app.use(bodyP.json())
// app.use("/codemirror-5.65.17", express.static("/Users/ghorakavisaranya/Desktop/codingPlayground/codemirror-5.65.17"))
// app.get("/", function (req, res) {
//     compiler.flush(function () {
//         console.log("deleted")
//     })
//     res.sendFile("/Users/ghorakavisaranya/Desktop/codingPlayground/index.html")
// })
// app.post("/compile", function (req, res) {
//     var code = req.body.code
//     var input = req.body.input
//     var lang = req.body.lang
//     try {

//         if (lang == "Cpp") {
//             if (!input) {
//                 var envData = { OS: "linux", cmd: "g++", options: { timeout: 10000 } }; // (uses g++ command to compile )
//                 compiler.compileCPP(envData, code, function (data) {
//                     if (data.output) {
//                         res.send(data);
//                     }
//                     else {
//                         res.send({ output: "error" })
//                     }
//                 });
//             }
//             else {
//                 var envData = { OS: "linux", cmd: "g++", options: { timeout: 10000 } }; // (uses g++ command to compile )
//                 compiler.compileCPPWithInput(envData, code, input, function (data) {
//                     if (data.output) {
//                         res.send(data);
//                     }
//                     else {
//                         res.send({ output: "error" })
//                     }
//                 });
//             }
//         }
//         else if (lang == "Java") {
//             if (!input) {
//                 var envData = { OS: "linux" };
//                 compiler.compileJava(envData, code, function (data) {
//                     if (data.output) {
//                         res.send(data);
//                     }
//                     else {
//                         res.send({ output: "error" })
//                     }
//                 })
//             }
//             else {
//                 //if windows  
//                 var envData = { OS: "linux" };
//                 //else
//                 compiler.compileJavaWithInput(envData, code, input, function (data) {
//                     if (data.output) {
//                         res.send(data);
//                     }
//                     else {
//                         res.send({ output: "error" })
//                     }
//                 })
//             }
//         }
//         else if (lang == "Python") {
//             if (!input) {
//                 var envData = { OS: "linux" };
//                 compiler.compilePython(envData, code, function (data) {
//                     if (data.output) {
//                         res.send(data);
//                     }
//                     else {
//                         res.send({ output: "error" })
//                     }
//                 });
//             }
//             else {
//                 var envData = { OS: "linux" };
//                 compiler.compilePythonWithInput(envData, code, input, function (data) {
//                     if (data.output) {
//                         res.send(data);
//                     }
//                     else {
//                         res.send({ output: "error" })
//                     }
//                 });
//             }
//         }
//     }
//     catch (e) {
//         console.log("error")
//     }
// })

// app.listen(8000)









// const express = require("express");
// const app = express();
// const bodyP = require("body-parser");
// const compiler = require("compilex");
// const options = { stats: true };
// compiler.init(options);

// app.use(bodyP.json());
// app.use("/codemirror-5.65.17", express.static("/Users/ghorakavisaranya/Desktop/codingPlayground/codemirror-5.65.17"));

// app.get("/", function (req, res) {
//     compiler.flush(function () {
//         console.log("deleted");
//     });
//     res.sendFile("/Users/ghorakavisaranya/Desktop/codingPlayground/index.html");
// });

// app.post("/compile", function (req, res) {
//     var code = req.body.code;
//     var input = req.body.input;
//     var lang = req.body.lang;

//     try {
//         if (lang == "Cpp") {
//             var envData = { OS: "linux", cmd: "g++", options: { timeout: 10000 } };
//             if (!input) {
//                 compiler.compileCPP(envData, code, function (data) {
//                     res.send(data.output ? data : { output: "error" });
//                 });
//             } else {
//                 compiler.compileCPPWithInput(envData, code, input, function (data) {
//                     res.send(data.output ? data : { output: "error" });
//                 });
//             }
//         }
//         else if (lang == "Java") {
//             var envData = { OS: "linux", cmd: "javac" }; // Ensure cmd is specified
//             if (!input) {
//                 compiler.compileJava(envData, code, function (data) {
//                     res.send(data.output ? data : { output: "error" });
//                 });
//             } else {
//                 compiler.compileJavaWithInput(envData, code, input, function (data) {
//                     res.send(data.output ? data : { output: "error" });
//                 });
//             }
//         }
//         else if (lang == "Python") {
//             var envData = { OS: "linux", cmd: "python3" }; // Python3 is commonly used on macOS
//             if (!input) {
//                 compiler.compilePython(envData, code, function (data) {
//                     res.send(data.output ? data : { output: "error" });
//                 });
//             } else {
//                 compiler.compilePythonWithInput(envData, code, input, function (data) {
//                     res.send(data.output ? data : { output: "error" });
//                 });
//             }
//         }
//     } catch (e) {
//         console.error("Compilation error:", e.message);
//         res.status(500).send({ output: "Internal Server Error" });
//     }
// });

// app.listen(8000, () => {
//     console.log("Server running on port 8000");
// });








const express = require("express");
const app = express();
const bodyP = require("body-parser");
const compiler = require("compilex");
const options = { stats: true };
compiler.init(options);

app.use(bodyP.json());
app.use("/codemirror-5.65.17", express.static("/Users/ghorakavisaranya/Desktop/codingPlayground/codemirror-5.65.17"));

app.get("/", function (req, res) {
    compiler.flush(function () {
        console.log("deleted");
    });
    res.sendFile("/Users/ghorakavisaranya/Desktop/codingPlayground/index.html");
});

app.post("/compile", function (req, res) {
    var code = req.body.code;
    var input = req.body.input;
    var lang = req.body.lang;

    try {
        if (lang === "Java") {
            var envData = { OS: "linux", cmd: "javac" }; // Ensure cmd is specified
            if (!input) {
                compiler.compileJava(envData, code, function (data) {
                    res.send(data.output ? data : { output: "error" });
                });
            } else {
                compiler.compileJavaWithInput(envData, code, input, function (data) {
                    res.send(data.output ? data : { output: "error" });
                });
            }
        }
        // You can add more languages like C++, Python, etc., following this pattern
    } catch (e) {
        console.error("Compilation error:", e.message);
        res.status(500).send({ output: "Internal Server Error" });
    }
});

app.listen(8000, () => {
    console.log("Server running on port 8000");
});





// app.post("/compile", function (req, res) {
//     var code = req.body.code;
//     var input = req.body.input;
//     var lang = req.body.lang;

//     try {
//         if (lang === "Java") {
//             var envData = { OS: "linux", cmd: "javac" };
//             if (!input) {
//                 compiler.compileJava(envData, code, function (data) {
//                     if (data.error) {
//                         res.status(400).send({ error: data.error });
//                     } else {
//                         res.send({ output: data.output });
//                     }
//                 });
//             } else {
//                 compiler.compileJavaWithInput(envData, code, input, function (data) {
//                     if (data.error) {
//                         res.status(400).send({ error: data.error });
//                     } else {
//                         res.send({ output: data.output });
//                     }
//                 });
//             }
//         }
//         // Add handling for other languages if needed
//     } catch (e) {
//         console.error("Compilation error:", e.message);
//         res.status(500).send({ error: "Internal Server Error" });
//     }
// });
