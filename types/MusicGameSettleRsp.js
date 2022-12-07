"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MusicGameSettleRsp = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class MusicGameSettleRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("MusicGameSettleRsp", [
            { no: 12, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 7, name: "ugc_guid", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 8, name: "is_new_record", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 10, name: "is_unlock_next_level", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 1, name: "music_basic_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { retcode: 0, ugcGuid: 0n, isNewRecord: false, isUnlockNextLevel: false, musicBasicId: 0 };
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
                case /* int32 retcode */ 12:
                    message.retcode = reader.int32();
                    break;
                case /* uint64 ugc_guid */ 7:
                    message.ugcGuid = reader.uint64().toBigInt();
                    break;
                case /* bool is_new_record */ 8:
                    message.isNewRecord = reader.bool();
                    break;
                case /* bool is_unlock_next_level */ 10:
                    message.isUnlockNextLevel = reader.bool();
                    break;
                case /* uint32 music_basic_id */ 1:
                    message.musicBasicId = reader.uint32();
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
        /* int32 retcode = 12; */
        if (message.retcode !== 0)
            writer.tag(12, runtime_1.WireType.Varint).int32(message.retcode);
        /* uint64 ugc_guid = 7; */
        if (message.ugcGuid !== 0n)
            writer.tag(7, runtime_1.WireType.Varint).uint64(message.ugcGuid);
        /* bool is_new_record = 8; */
        if (message.isNewRecord !== false)
            writer.tag(8, runtime_1.WireType.Varint).bool(message.isNewRecord);
        /* bool is_unlock_next_level = 10; */
        if (message.isUnlockNextLevel !== false)
            writer.tag(10, runtime_1.WireType.Varint).bool(message.isUnlockNextLevel);
        /* uint32 music_basic_id = 1; */
        if (message.musicBasicId !== 0)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.musicBasicId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message MusicGameSettleRsp
 */
exports.MusicGameSettleRsp = new MusicGameSettleRsp$Type();
