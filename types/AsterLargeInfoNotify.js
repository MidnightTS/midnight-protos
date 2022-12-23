"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AsterLargeInfoNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const AsterLargeDetailInfo_1 = require("./AsterLargeDetailInfo");
// @generated message type with reflection information, may provide speed optimized methods
class AsterLargeInfoNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("AsterLargeInfoNotify", [
            { no: 6, name: "info", kind: "message", T: () => AsterLargeDetailInfo_1.AsterLargeDetailInfo }
        ]);
    }
    create(value) {
        const message = {};
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
                case /* AsterLargeDetailInfo info */ 6:
                    message.info = AsterLargeDetailInfo_1.AsterLargeDetailInfo.internalBinaryRead(reader, reader.uint32(), options, message.info);
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
        /* AsterLargeDetailInfo info = 6; */
        if (message.info)
            AsterLargeDetailInfo_1.AsterLargeDetailInfo.internalBinaryWrite(message.info, writer.tag(6, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message AsterLargeInfoNotify
 */
exports.AsterLargeInfoNotify = new AsterLargeInfoNotify$Type();
