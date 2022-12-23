"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayerGameTimeByLuaNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class PlayerGameTimeByLuaNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("PlayerGameTimeByLuaNotify", [
            { no: 12, name: "game_time", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "uid", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "sim_speed", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { gameTime: 0, uid: 0, simSpeed: 0 };
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
                case /* uint32 game_time */ 12:
                    message.gameTime = reader.uint32();
                    break;
                case /* uint32 uid */ 8:
                    message.uid = reader.uint32();
                    break;
                case /* uint32 sim_speed */ 14:
                    message.simSpeed = reader.uint32();
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
        /* uint32 game_time = 12; */
        if (message.gameTime !== 0)
            writer.tag(12, runtime_1.WireType.Varint).uint32(message.gameTime);
        /* uint32 uid = 8; */
        if (message.uid !== 0)
            writer.tag(8, runtime_1.WireType.Varint).uint32(message.uid);
        /* uint32 sim_speed = 14; */
        if (message.simSpeed !== 0)
            writer.tag(14, runtime_1.WireType.Varint).uint32(message.simSpeed);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message PlayerGameTimeByLuaNotify
 */
exports.PlayerGameTimeByLuaNotify = new PlayerGameTimeByLuaNotify$Type();
