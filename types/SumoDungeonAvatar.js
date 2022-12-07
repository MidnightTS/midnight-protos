"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SumoDungeonAvatar = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class SumoDungeonAvatar$Type extends runtime_5.MessageType {
    constructor() {
        super("SumoDungeonAvatar", [
            { no: 13, name: "is_alive", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 4, name: "is_trial", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 10, name: "avatar_guid", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ }
        ]);
    }
    create(value) {
        const message = { isAlive: false, isTrial: false, avatarGuid: 0n };
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
                case /* bool is_alive */ 13:
                    message.isAlive = reader.bool();
                    break;
                case /* bool is_trial */ 4:
                    message.isTrial = reader.bool();
                    break;
                case /* uint64 avatar_guid */ 10:
                    message.avatarGuid = reader.uint64().toBigInt();
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
        /* bool is_alive = 13; */
        if (message.isAlive !== false)
            writer.tag(13, runtime_1.WireType.Varint).bool(message.isAlive);
        /* bool is_trial = 4; */
        if (message.isTrial !== false)
            writer.tag(4, runtime_1.WireType.Varint).bool(message.isTrial);
        /* uint64 avatar_guid = 10; */
        if (message.avatarGuid !== 0n)
            writer.tag(10, runtime_1.WireType.Varint).uint64(message.avatarGuid);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message SumoDungeonAvatar
 */
exports.SumoDungeonAvatar = new SumoDungeonAvatar$Type();
