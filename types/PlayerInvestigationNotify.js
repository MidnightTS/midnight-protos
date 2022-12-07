"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayerInvestigationNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const Investigation_1 = require("./Investigation");
// @generated message type with reflection information, may provide speed optimized methods
class PlayerInvestigationNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("PlayerInvestigationNotify", [
            { no: 12, name: "investigation_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => Investigation_1.Investigation }
        ]);
    }
    create(value) {
        const message = { investigationList: [] };
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
                case /* repeated Investigation investigation_list */ 12:
                    message.investigationList.push(Investigation_1.Investigation.internalBinaryRead(reader, reader.uint32(), options));
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
        /* repeated Investigation investigation_list = 12; */
        for (let i = 0; i < message.investigationList.length; i++)
            Investigation_1.Investigation.internalBinaryWrite(message.investigationList[i], writer.tag(12, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message PlayerInvestigationNotify
 */
exports.PlayerInvestigationNotify = new PlayerInvestigationNotify$Type();
