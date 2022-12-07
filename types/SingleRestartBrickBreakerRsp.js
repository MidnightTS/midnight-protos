"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SingleRestartBrickBreakerRsp = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class SingleRestartBrickBreakerRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("SingleRestartBrickBreakerRsp", [
            { no: 8, name: "level_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 7, name: "is_dungeon", kind: "scalar", T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = { levelId: 0, retcode: 0, isDungeon: false };
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
                case /* uint32 level_id */ 8:
                    message.levelId = reader.uint32();
                    break;
                case /* int32 retcode */ 15:
                    message.retcode = reader.int32();
                    break;
                case /* bool is_dungeon */ 7:
                    message.isDungeon = reader.bool();
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
        /* uint32 level_id = 8; */
        if (message.levelId !== 0)
            writer.tag(8, runtime_1.WireType.Varint).uint32(message.levelId);
        /* int32 retcode = 15; */
        if (message.retcode !== 0)
            writer.tag(15, runtime_1.WireType.Varint).int32(message.retcode);
        /* bool is_dungeon = 7; */
        if (message.isDungeon !== false)
            writer.tag(7, runtime_1.WireType.Varint).bool(message.isDungeon);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message SingleRestartBrickBreakerRsp
 */
exports.SingleRestartBrickBreakerRsp = new SingleRestartBrickBreakerRsp$Type();
