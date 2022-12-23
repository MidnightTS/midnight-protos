"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MusicGameStartReq = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class MusicGameStartReq$Type extends runtime_5.MessageType {
    constructor() {
        super("MusicGameStartReq", [
            { no: 11, name: "music_basic_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "is_save_score", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 9, name: "ugc_guid", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ }
        ]);
    }
    create(value) {
        const message = { musicBasicId: 0, isSaveScore: false, ugcGuid: 0n };
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
                case /* uint32 music_basic_id */ 11:
                    message.musicBasicId = reader.uint32();
                    break;
                case /* bool is_save_score */ 12:
                    message.isSaveScore = reader.bool();
                    break;
                case /* uint64 ugc_guid */ 9:
                    message.ugcGuid = reader.uint64().toBigInt();
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
        /* uint32 music_basic_id = 11; */
        if (message.musicBasicId !== 0)
            writer.tag(11, runtime_1.WireType.Varint).uint32(message.musicBasicId);
        /* bool is_save_score = 12; */
        if (message.isSaveScore !== false)
            writer.tag(12, runtime_1.WireType.Varint).bool(message.isSaveScore);
        /* uint64 ugc_guid = 9; */
        if (message.ugcGuid !== 0n)
            writer.tag(9, runtime_1.WireType.Varint).uint64(message.ugcGuid);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message MusicGameStartReq
 */
exports.MusicGameStartReq = new MusicGameStartReq$Type();
