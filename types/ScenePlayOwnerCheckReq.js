"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScenePlayOwnerCheckReq = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class ScenePlayOwnerCheckReq$Type extends runtime_5.MessageType {
    constructor() {
        super("ScenePlayOwnerCheckReq", [
            { no: 10, name: "play_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "is_skip_match", kind: "scalar", T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = { playId: 0, isSkipMatch: false };
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
                case /* uint32 play_id */ 10:
                    message.playId = reader.uint32();
                    break;
                case /* bool is_skip_match */ 8:
                    message.isSkipMatch = reader.bool();
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
        /* uint32 play_id = 10; */
        if (message.playId !== 0)
            writer.tag(10, runtime_1.WireType.Varint).uint32(message.playId);
        /* bool is_skip_match = 8; */
        if (message.isSkipMatch !== false)
            writer.tag(8, runtime_1.WireType.Varint).bool(message.isSkipMatch);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message ScenePlayOwnerCheckReq
 */
exports.ScenePlayOwnerCheckReq = new ScenePlayOwnerCheckReq$Type();
