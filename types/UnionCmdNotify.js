"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnionCmdNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const UnionCmd_1 = require("./UnionCmd");
// @generated message type with reflection information, may provide speed optimized methods
class UnionCmdNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("UnionCmdNotify", [
            { no: 7, name: "cmd_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => UnionCmd_1.UnionCmd }
        ]);
    }
    create(value) {
        const message = { cmdList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated UnionCmd cmd_list */ 7:
                    message.cmdList.push(UnionCmd_1.UnionCmd.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* repeated UnionCmd cmd_list = 7; */
        for (let i = 0; i < message.cmdList.length; i++)
            UnionCmd_1.UnionCmd.internalBinaryWrite(message.cmdList[i], writer.tag(7, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message UnionCmdNotify
 */
exports.UnionCmdNotify = new UnionCmdNotify$Type();
