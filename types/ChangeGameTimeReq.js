"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChangeGameTimeReq = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class ChangeGameTimeReq$Type extends runtime_5.MessageType {
    constructor() {
        super("ChangeGameTimeReq", [
            { no: 3, name: "extra_days", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "game_time", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "is_force_set", kind: "scalar", T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = { extraDays: 0, gameTime: 0, isForceSet: false };
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
                case /* uint32 extra_days */ 3:
                    message.extraDays = reader.uint32();
                    break;
                case /* uint32 game_time */ 8:
                    message.gameTime = reader.uint32();
                    break;
                case /* bool is_force_set */ 2:
                    message.isForceSet = reader.bool();
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
        /* uint32 extra_days = 3; */
        if (message.extraDays !== 0)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.extraDays);
        /* uint32 game_time = 8; */
        if (message.gameTime !== 0)
            writer.tag(8, runtime_1.WireType.Varint).uint32(message.gameTime);
        /* bool is_force_set = 2; */
        if (message.isForceSet !== false)
            writer.tag(2, runtime_1.WireType.Varint).bool(message.isForceSet);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message ChangeGameTimeReq
 */
exports.ChangeGameTimeReq = new ChangeGameTimeReq$Type();
