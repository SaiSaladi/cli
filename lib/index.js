#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var chalk_1 = __importDefault(require("chalk"));
var clear_1 = __importDefault(require("clear"));
var figlet_1 = __importDefault(require("figlet"));
var program = require("commander");
clear_1.default();
console.log(chalk_1.default.red(figlet_1.default.textSync("Sai cli", { horizontalLayout: "full" })));
program
    .version("0.0.1")
    .description("An example CLI for ordering pizza's")
    .option("-p, --peppers", "Add peppers")
    .option("-P, --pineapple", "Add pineapple")
    .option("-b, --bbq", "Add bbq sauce")
    .option("-c, --cheese <type>", "Add the specified type of cheese [marble]")
    .option("-C, --no-cheese", "You do not want any cheese")
    .parse(process.argv);
console.log("you ordered a pizza with:");
if (program.peppers)
    console.log("  - peppers");
if (program.pineapple)
    console.log("  - pineapple");
if (program.bbq)
    console.log("  - bbq");
var cheese = true === program.cheese ? "marble" : program.cheese || "no";
console.log("  - %s cheese", cheese);
if (!process.argv.slice(2).length) {
    program.outputHelp();
}
