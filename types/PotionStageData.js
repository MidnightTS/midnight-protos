"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PotionStageData = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const PotionLevelData_1 = require("./PotionLevelData");
// @generated message type with reflection information, may provide speed optimized methods
class PotionStageData$Type extends runtime_5.MessageType {
    constructor() {
        super("PotionStageData", [
            { no: 7, name: "Unk3300_BMEHJHFCPMA", kind: "scalar", jsonName: "Unk3300BMEHJHFCPMA", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "Unk3300_NLMEPPPMCKI", kind: "scalar", jsonName: "Unk3300NLMEPPPMCKI", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "stage_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "is_open", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 11, name: "level_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => PotionLevelData_1.PotionLevelData }
        ]);
    }
    create(value) {
        const message = { unk3300BMEHJHFCPMA: [], unk3300NLMEPPPMCKI: [], stageId: 0, isOpen: false, levelList: [] };
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
                case /* repeated uint32 Unk3300_BMEHJHFCPMA = 7 [json_name = "Unk3300BMEHJHFCPMA"];*/ 7:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.unk3300BMEHJHFCPMA.push(reader.uint32());
                    else
                        message.unk3300BMEHJHFCPMA.push(reader.uint32());
                    break;
                case /* repeated uint32 Unk3300_NLMEPPPMCKI = 9 [json_name = "Unk3300NLMEPPPMCKI"];*/ 9:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.unk3300NLMEPPPMCKI.push(reader.uint32());
                    else
                        message.unk3300NLMEPPPMCKI.push(reader.uint32());
                    break;
                case /* uint32 stage_id */ 13:
                    message.stageId = reader.uint32();
                    break;
                case /* bool is_open */ 8:
                    message.isOpen = reader.bool();
                    break;
                case /* repeated PotionLevelData level_list */ 11:
                    message.levelList.push(PotionLevelData_1.PotionLevelData.internalBinaryRead(reader, reader.uint32(), options));
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
        /* repeated uint32 Unk3300_BMEHJHFCPMA = 7 [json_name = "Unk3300BMEHJHFCPMA"]; */
        if (message.unk3300BMEHJHFCPMA.length) {
            writer.tag(7, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.unk3300BMEHJHFCPMA.length; i++)
                writer.uint32(message.unk3300BMEHJHFCPMA[i]);
            writer.join();
        }
        /* repeated uint32 Unk3300_NLMEPPPMCKI = 9 [json_name = "Unk3300NLMEPPPMCKI"]; */
        if (message.unk3300NLMEPPPMCKI.length) {
            writer.tag(9, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.unk3300NLMEPPPMCKI.length; i++)
                writer.uint32(message.unk3300NLMEPPPMCKI[i]);
            writer.join();
        }
        /* uint32 stage_id = 13; */
        if (message.stageId !== 0)
            writer.tag(13, runtime_2.WireType.Varint).uint32(message.stageId);
        /* bool is_open = 8; */
        if (message.isOpen !== false)
            writer.tag(8, runtime_2.WireType.Varint).bool(message.isOpen);
        /* repeated PotionLevelData level_list = 11; */
        for (let i = 0; i < message.levelList.length; i++)
            PotionLevelData_1.PotionLevelData.internalBinaryWrite(message.levelList[i], writer.tag(11, runtime_2.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message PotionStageData
 */
exports.PotionStageData = new PotionStageData$Type();
