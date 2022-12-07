"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChessPlayerInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const ChessNormalCardInfo_1 = require("./ChessNormalCardInfo");
// @generated message type with reflection information, may provide speed optimized methods
class ChessPlayerInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("ChessPlayerInfo", [
            { no: 1, name: "candidate_card_info_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => ChessNormalCardInfo_1.ChessNormalCardInfo },
            { no: 5, name: "uid", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "Unk3300_AOCJHOKCDDM", kind: "scalar", jsonName: "Unk3300AOCJHOKCDDM", T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "Unk3300_GPNDNCCLHKE", kind: "scalar", jsonName: "Unk3300GPNDNCCLHKE", T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "building_points", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "Unk3300_PPFBGIDKCDJ", kind: "scalar", jsonName: "Unk3300PPFBGIDKCDJ", T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "Unk3300_PPFPEAGBHLP", kind: "scalar", jsonName: "Unk3300PPFPEAGBHLP", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { candidateCardInfoList: [], uid: 0, unk3300AOCJHOKCDDM: 0, unk3300GPNDNCCLHKE: 0, buildingPoints: 0, unk3300PPFBGIDKCDJ: 0, unk3300PPFPEAGBHLP: 0 };
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
                case /* repeated ChessNormalCardInfo candidate_card_info_list */ 1:
                    message.candidateCardInfoList.push(ChessNormalCardInfo_1.ChessNormalCardInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* uint32 uid */ 5:
                    message.uid = reader.uint32();
                    break;
                case /* uint32 Unk3300_AOCJHOKCDDM = 2 [json_name = "Unk3300AOCJHOKCDDM"];*/ 2:
                    message.unk3300AOCJHOKCDDM = reader.uint32();
                    break;
                case /* uint32 Unk3300_GPNDNCCLHKE = 10 [json_name = "Unk3300GPNDNCCLHKE"];*/ 10:
                    message.unk3300GPNDNCCLHKE = reader.uint32();
                    break;
                case /* uint32 building_points */ 8:
                    message.buildingPoints = reader.uint32();
                    break;
                case /* uint32 Unk3300_PPFBGIDKCDJ = 12 [json_name = "Unk3300PPFBGIDKCDJ"];*/ 12:
                    message.unk3300PPFBGIDKCDJ = reader.uint32();
                    break;
                case /* uint32 Unk3300_PPFPEAGBHLP = 13 [json_name = "Unk3300PPFPEAGBHLP"];*/ 13:
                    message.unk3300PPFPEAGBHLP = reader.uint32();
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
        /* repeated ChessNormalCardInfo candidate_card_info_list = 1; */
        for (let i = 0; i < message.candidateCardInfoList.length; i++)
            ChessNormalCardInfo_1.ChessNormalCardInfo.internalBinaryWrite(message.candidateCardInfoList[i], writer.tag(1, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* uint32 uid = 5; */
        if (message.uid !== 0)
            writer.tag(5, runtime_1.WireType.Varint).uint32(message.uid);
        /* uint32 Unk3300_AOCJHOKCDDM = 2 [json_name = "Unk3300AOCJHOKCDDM"]; */
        if (message.unk3300AOCJHOKCDDM !== 0)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.unk3300AOCJHOKCDDM);
        /* uint32 Unk3300_GPNDNCCLHKE = 10 [json_name = "Unk3300GPNDNCCLHKE"]; */
        if (message.unk3300GPNDNCCLHKE !== 0)
            writer.tag(10, runtime_1.WireType.Varint).uint32(message.unk3300GPNDNCCLHKE);
        /* uint32 building_points = 8; */
        if (message.buildingPoints !== 0)
            writer.tag(8, runtime_1.WireType.Varint).uint32(message.buildingPoints);
        /* uint32 Unk3300_PPFBGIDKCDJ = 12 [json_name = "Unk3300PPFBGIDKCDJ"]; */
        if (message.unk3300PPFBGIDKCDJ !== 0)
            writer.tag(12, runtime_1.WireType.Varint).uint32(message.unk3300PPFBGIDKCDJ);
        /* uint32 Unk3300_PPFPEAGBHLP = 13 [json_name = "Unk3300PPFPEAGBHLP"]; */
        if (message.unk3300PPFPEAGBHLP !== 0)
            writer.tag(13, runtime_1.WireType.Varint).uint32(message.unk3300PPFPEAGBHLP);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message ChessPlayerInfo
 */
exports.ChessPlayerInfo = new ChessPlayerInfo$Type();
