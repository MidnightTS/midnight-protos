"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpActivityUpdateNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const OpActivityInfo_1 = require("./OpActivityInfo");
// @generated message type with reflection information, may provide speed optimized methods
class OpActivityUpdateNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("OpActivityUpdateNotify", [
            { no: 9, name: "op_activity_info", kind: "message", T: () => OpActivityInfo_1.OpActivityInfo }
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
                case /* OpActivityInfo op_activity_info */ 9:
                    message.opActivityInfo = OpActivityInfo_1.OpActivityInfo.internalBinaryRead(reader, reader.uint32(), options, message.opActivityInfo);
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
        /* OpActivityInfo op_activity_info = 9; */
        if (message.opActivityInfo)
            OpActivityInfo_1.OpActivityInfo.internalBinaryWrite(message.opActivityInfo, writer.tag(9, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message OpActivityUpdateNotify
 */
exports.OpActivityUpdateNotify = new OpActivityUpdateNotify$Type();
