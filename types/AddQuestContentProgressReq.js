"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddQuestContentProgressReq = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class AddQuestContentProgressReq$Type extends runtime_5.MessageType {
    constructor() {
        super("AddQuestContentProgressReq", [
            { no: 1, name: "content_type", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "add_progress", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "param", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { contentType: 0, addProgress: 0, param: 0 };
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
                case /* uint32 content_type */ 1:
                    message.contentType = reader.uint32();
                    break;
                case /* uint32 add_progress */ 6:
                    message.addProgress = reader.uint32();
                    break;
                case /* uint32 param */ 11:
                    message.param = reader.uint32();
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
        /* uint32 content_type = 1; */
        if (message.contentType !== 0)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.contentType);
        /* uint32 add_progress = 6; */
        if (message.addProgress !== 0)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.addProgress);
        /* uint32 param = 11; */
        if (message.param !== 0)
            writer.tag(11, runtime_1.WireType.Varint).uint32(message.param);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message AddQuestContentProgressReq
 */
exports.AddQuestContentProgressReq = new AddQuestContentProgressReq$Type();
