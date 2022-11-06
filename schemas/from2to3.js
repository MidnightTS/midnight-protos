/**
 * @package ProtoSchemas
 * @author sigmatuse4
 * @license GPL-3.0
 */
const fs = require('fs');
const protobufs = fs.readdirSync(__dirname);

// Batch Proto2 to Proto3 conversion.

// for (const protobuf of protobufs) {
// 	const protoBin = fs.readFileSync(protobuf).toString('binary');
// 	const fileName = protobuf.split('\\').pop().replace('cmd_', 'packet_');

// 	fs.writeFileSync(fileName, protoBin.replace("proto2", "proto3"));
// }