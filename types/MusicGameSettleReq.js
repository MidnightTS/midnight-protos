"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MusicGameSettleReq = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class MusicGameSettleReq$Type extends runtime_5.MessageType {
    constructor() {
        super("MusicGameSettleReq", [
            { no: 14, name: "Unk3300_MLLDAPCIDDO", kind: "scalar", jsonName: "Unk3300MLLDAPCIDDO", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 1007, name: "Unk3300_HHBCEPNLCLL", kind: "scalar", jsonName: "Unk3300HHBCEPNLCLL", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 1984, name: "Unk3300_DMLNKOLOAAH", kind: "scalar", jsonName: "Unk3300DMLNKOLOAAH", T: 8 /*ScalarType.BOOL*/ },
            { no: 82, name: "Unk3300_EBOJMGOCPLE", kind: "scalar", jsonName: "Unk3300EBOJMGOCPLE", T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "max_combo", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "is_save_score", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 790, name: "speed", kind: "scalar", T: 2 /*ScalarType.FLOAT*/ },
            { no: 15, name: "Unk3300_MDHEJNFHBBI", kind: "scalar", jsonName: "Unk3300MDHEJNFHBBI", T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "score", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 291, name: "Unk3300_BHIGAMNDFML", kind: "scalar", jsonName: "Unk3300BHIGAMNDFML", T: 8 /*ScalarType.BOOL*/ },
            { no: 11, name: "correct_hit", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 1, name: "Unk3300_HEPJNCAOEMP", kind: "scalar", jsonName: "Unk3300HEPJNCAOEMP", T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "combo", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 304, name: "Unk3300_IPODKENCAOK", kind: "scalar", jsonName: "Unk3300IPODKENCAOK", T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "ugc_guid", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 12, name: "Unk3300_AHAGHAHGPLD", kind: "scalar", jsonName: "Unk3300AHAGHAHGPLD", T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "music_basic_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 1951, name: "Unk3300_GJMIIDIOOMM", kind: "scalar", jsonName: "Unk3300GJMIIDIOOMM", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { unk3300MLLDAPCIDDO: [], unk3300HHBCEPNLCLL: [], unk3300DMLNKOLOAAH: false, unk3300EBOJMGOCPLE: 0, maxCombo: 0, isSaveScore: false, speed: 0, unk3300MDHEJNFHBBI: 0, score: 0, unk3300BHIGAMNDFML: false, correctHit: 0, unk3300HEPJNCAOEMP: 0, combo: 0, unk3300IPODKENCAOK: 0, ugcGuid: 0n, unk3300AHAGHAHGPLD: 0, musicBasicId: 0, unk3300GJMIIDIOOMM: 0 };
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
                case /* repeated uint32 Unk3300_MLLDAPCIDDO = 14 [json_name = "Unk3300MLLDAPCIDDO"];*/ 14:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.unk3300MLLDAPCIDDO.push(reader.uint32());
                    else
                        message.unk3300MLLDAPCIDDO.push(reader.uint32());
                    break;
                case /* repeated uint32 Unk3300_HHBCEPNLCLL = 1007 [json_name = "Unk3300HHBCEPNLCLL"];*/ 1007:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.unk3300HHBCEPNLCLL.push(reader.uint32());
                    else
                        message.unk3300HHBCEPNLCLL.push(reader.uint32());
                    break;
                case /* bool Unk3300_DMLNKOLOAAH = 1984 [json_name = "Unk3300DMLNKOLOAAH"];*/ 1984:
                    message.unk3300DMLNKOLOAAH = reader.bool();
                    break;
                case /* uint32 Unk3300_EBOJMGOCPLE = 82 [json_name = "Unk3300EBOJMGOCPLE"];*/ 82:
                    message.unk3300EBOJMGOCPLE = reader.uint32();
                    break;
                case /* uint32 max_combo */ 10:
                    message.maxCombo = reader.uint32();
                    break;
                case /* bool is_save_score */ 7:
                    message.isSaveScore = reader.bool();
                    break;
                case /* float speed */ 790:
                    message.speed = reader.float();
                    break;
                case /* uint32 Unk3300_MDHEJNFHBBI = 15 [json_name = "Unk3300MDHEJNFHBBI"];*/ 15:
                    message.unk3300MDHEJNFHBBI = reader.uint32();
                    break;
                case /* uint32 score */ 8:
                    message.score = reader.uint32();
                    break;
                case /* bool Unk3300_BHIGAMNDFML = 291 [json_name = "Unk3300BHIGAMNDFML"];*/ 291:
                    message.unk3300BHIGAMNDFML = reader.bool();
                    break;
                case /* uint32 correct_hit */ 11:
                    message.correctHit = reader.uint32();
                    break;
                case /* uint32 Unk3300_HEPJNCAOEMP = 1 [json_name = "Unk3300HEPJNCAOEMP"];*/ 1:
                    message.unk3300HEPJNCAOEMP = reader.uint32();
                    break;
                case /* uint32 combo */ 4:
                    message.combo = reader.uint32();
                    break;
                case /* uint32 Unk3300_IPODKENCAOK = 304 [json_name = "Unk3300IPODKENCAOK"];*/ 304:
                    message.unk3300IPODKENCAOK = reader.uint32();
                    break;
                case /* uint64 ugc_guid */ 3:
                    message.ugcGuid = reader.uint64().toBigInt();
                    break;
                case /* uint32 Unk3300_AHAGHAHGPLD = 12 [json_name = "Unk3300AHAGHAHGPLD"];*/ 12:
                    message.unk3300AHAGHAHGPLD = reader.uint32();
                    break;
                case /* uint32 music_basic_id */ 5:
                    message.musicBasicId = reader.uint32();
                    break;
                case /* uint32 Unk3300_GJMIIDIOOMM = 1951 [json_name = "Unk3300GJMIIDIOOMM"];*/ 1951:
                    message.unk3300GJMIIDIOOMM = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* repeated uint32 Unk3300_MLLDAPCIDDO = 14 [json_name = "Unk3300MLLDAPCIDDO"]; */
        if (message.unk3300MLLDAPCIDDO.length) {
            writer.tag(14, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.unk3300MLLDAPCIDDO.length; i++)
                writer.uint32(message.unk3300MLLDAPCIDDO[i]);
            writer.join();
        }
        /* repeated uint32 Unk3300_HHBCEPNLCLL = 1007 [json_name = "Unk3300HHBCEPNLCLL"]; */
        if (message.unk3300HHBCEPNLCLL.length) {
            writer.tag(1007, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.unk3300HHBCEPNLCLL.length; i++)
                writer.uint32(message.unk3300HHBCEPNLCLL[i]);
            writer.join();
        }
        /* bool Unk3300_DMLNKOLOAAH = 1984 [json_name = "Unk3300DMLNKOLOAAH"]; */
        if (message.unk3300DMLNKOLOAAH !== false)
            writer.tag(1984, runtime_2.WireType.Varint).bool(message.unk3300DMLNKOLOAAH);
        /* uint32 Unk3300_EBOJMGOCPLE = 82 [json_name = "Unk3300EBOJMGOCPLE"]; */
        if (message.unk3300EBOJMGOCPLE !== 0)
            writer.tag(82, runtime_2.WireType.Varint).uint32(message.unk3300EBOJMGOCPLE);
        /* uint32 max_combo = 10; */
        if (message.maxCombo !== 0)
            writer.tag(10, runtime_2.WireType.Varint).uint32(message.maxCombo);
        /* bool is_save_score = 7; */
        if (message.isSaveScore !== false)
            writer.tag(7, runtime_2.WireType.Varint).bool(message.isSaveScore);
        /* float speed = 790; */
        if (message.speed !== 0)
            writer.tag(790, runtime_2.WireType.Bit32).float(message.speed);
        /* uint32 Unk3300_MDHEJNFHBBI = 15 [json_name = "Unk3300MDHEJNFHBBI"]; */
        if (message.unk3300MDHEJNFHBBI !== 0)
            writer.tag(15, runtime_2.WireType.Varint).uint32(message.unk3300MDHEJNFHBBI);
        /* uint32 score = 8; */
        if (message.score !== 0)
            writer.tag(8, runtime_2.WireType.Varint).uint32(message.score);
        /* bool Unk3300_BHIGAMNDFML = 291 [json_name = "Unk3300BHIGAMNDFML"]; */
        if (message.unk3300BHIGAMNDFML !== false)
            writer.tag(291, runtime_2.WireType.Varint).bool(message.unk3300BHIGAMNDFML);
        /* uint32 correct_hit = 11; */
        if (message.correctHit !== 0)
            writer.tag(11, runtime_2.WireType.Varint).uint32(message.correctHit);
        /* uint32 Unk3300_HEPJNCAOEMP = 1 [json_name = "Unk3300HEPJNCAOEMP"]; */
        if (message.unk3300HEPJNCAOEMP !== 0)
            writer.tag(1, runtime_2.WireType.Varint).uint32(message.unk3300HEPJNCAOEMP);
        /* uint32 combo = 4; */
        if (message.combo !== 0)
            writer.tag(4, runtime_2.WireType.Varint).uint32(message.combo);
        /* uint32 Unk3300_IPODKENCAOK = 304 [json_name = "Unk3300IPODKENCAOK"]; */
        if (message.unk3300IPODKENCAOK !== 0)
            writer.tag(304, runtime_2.WireType.Varint).uint32(message.unk3300IPODKENCAOK);
        /* uint64 ugc_guid = 3; */
        if (message.ugcGuid !== 0n)
            writer.tag(3, runtime_2.WireType.Varint).uint64(message.ugcGuid);
        /* uint32 Unk3300_AHAGHAHGPLD = 12 [json_name = "Unk3300AHAGHAHGPLD"]; */
        if (message.unk3300AHAGHAHGPLD !== 0)
            writer.tag(12, runtime_2.WireType.Varint).uint32(message.unk3300AHAGHAHGPLD);
        /* uint32 music_basic_id = 5; */
        if (message.musicBasicId !== 0)
            writer.tag(5, runtime_2.WireType.Varint).uint32(message.musicBasicId);
        /* uint32 Unk3300_GJMIIDIOOMM = 1951 [json_name = "Unk3300GJMIIDIOOMM"]; */
        if (message.unk3300GJMIIDIOOMM !== 0)
            writer.tag(1951, runtime_2.WireType.Varint).uint32(message.unk3300GJMIIDIOOMM);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message MusicGameSettleReq
 */
exports.MusicGameSettleReq = new MusicGameSettleReq$Type();
