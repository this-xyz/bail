const major = parseInt(process.versions.node.split('.')[0], 10);

if (major < 20) {
console.error(`\n✖️ This package requires Node.js 20+ to run reliably.\nYou are using Node.js ${process.versions.node}.\nPlease upgrade to Node.js 20+ to proceed.\n`);
process.exit(1);
}