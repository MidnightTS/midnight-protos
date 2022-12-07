"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InBattleChessSettleInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const ExhibitionDisplayInfo_1 = require("./ExhibitionDisplayInfo");
// @generated message type with reflection information, may provide speed optimized methods
class InBattleChessSettleInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("InBattleChessSettleInfo", [
            { no: 5, name: "Unk3300_LPANFEBFJOJ", kind: "scalar", jsonName: "Unk3300LPANFEBFJOJ", T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "scene_time_ms", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 13, name: "Unk3300_NKHDFHAPNCN", kind: "scalar", jsonName: "Unk3300NKHDFHAPNCN", T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "is_success", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 1, name: "Unk3300_EMNLLDJHMEI", kind: "scalar", jsonName: "Unk3300EMNLLDJHMEI", T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "score_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => ExhibitionDisplayInfo_1.ExhibitionDisplayInfo },
            { no: 2, name: "Unk3300_IPGILJCBABK", kind: "scalar", jsonName: "Unk3300IPGILJCBABK", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { unk3300LPANFEBFJOJ: 0, sceneTimeMs: 0n, unk3300NKHDFHAPNCN: 0, isSuccess: false, unk3300EMNLLDJHMEI: 0, scoreList: [], unk3300IPGILJCBABK: 0 };
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
                case /* uint32 Unk3300_LPANFEBFJOJ = 5 [json_name = "Unk3300LPANFEBFJOJ"];*/ 5:
                    message.unk3300LPANFEBFJOJ = reader.uint32();
                    break;
                case /* uint64 scene_time_ms */ 8:
                    message.sceneTimeMs = reader.uint64().toBigInt();
                    break;
                case /* uint32 Unk3300_NKHDFHAPNCN = 13 [json_name = "Unk3300NKHDFHAPNCN"];*/ 13:
                    message.unk3300NKHDFHAPNCN = reader.uint32();
                    break;
                case /* bool is_success */ 6:
                    message.isSuccess = reader.bool();
                    break;
                case /* uint32 Unk3300_EMNLLDJHMEI = 1 [json_name = "Unk3300EMNLLDJHMEI"];*/ 1:
                    message.unk3300EMNLLDJHMEI = reader.uint32();
                    break;
                case /* repeated ExhibitionDisplayInfo score_list */ 4:
                    message.scoreList.push(ExhibitionDisplayInfo_1.ExhibitionDisplayInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* uint32 Unk3300_IPGILJCBABK = 2 [json_name = "Unk3300IPGILJCBABK"];*/ 2:
                    message.unk3300IPGILJCBABK = reader.uint32();
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
        /* uint32 Unk3300_LPANFEBFJOJ = 5 [json_name = "Unk3300LPANFEBFJOJ"]; */
        if (message.unk3300LPANFEBFJOJ !== 0)
            writer.tag(5, runtime_1.WireType.Varint).uint32(message.unk3300LPANFEBFJOJ);
        /* uint64 scene_time_ms = 8; */
        if (message.sceneTimeMs !== 0n)
            writer.tag(8, runtime_1.WireType.Varint).uint64(message.sceneTimeMs);
        /* uint32 Unk3300_NKHDFHAPNCN = 13 [json_name = "Unk3300NKHDFHAPNCN"]; */
        if (message.unk3300NKHDFHAPNCN !== 0)
            writer.tag(13, runtime_1.WireType.Varint).uint32(message.unk3300NKHDFHAPNCN);
        /* bool is_success = 6; */
        if (message.isSuccess !== false)
            writer.tag(6, runtime_1.WireType.Varint).bool(message.isSuccess);
        /* uint32 Unk3300_EMNLLDJHMEI = 1 [json_name = "Unk3300EMNLLDJHMEI"]; */
        if (message.unk3300EMNLLDJHMEI !== 0)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.unk3300EMNLLDJHMEI);
        /* repeated ExhibitionDisplayInfo score_list = 4; */
        for (let i = 0; i < message.scoreList.length; i++)
            ExhibitionDisplayInfo_1.ExhibitionDisplayInfo.internalBinaryWrite(message.scoreList[i], writer.tag(4, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* uint32 Unk3300_IPGILJCBABK = 2 [json_name = "Unk3300IPGILJCBABK"]; */
        if (message.unk3300IPGILJCBABK !== 0)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.unk3300IPGILJCBABK);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message InBattleChessSettleInfo
 */
exports.InBattleChessSettleInfo = new InBattleChessSettleInfo$Type();
