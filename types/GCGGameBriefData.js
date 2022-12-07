"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GCGGameBriefData = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const GCGPlayerBriefData_1 = require("./GCGPlayerBriefData");
const GCGGameBusinessType_1 = require("./GCGGameBusinessType");
// @generated message type with reflection information, may provide speed optimized methods
class GCGGameBriefData$Type extends runtime_5.MessageType {
    constructor() {
        super("GCGGameBriefData", [
            { no: 13, name: "Unk3300_NCLDOGNCHGF", kind: "scalar", jsonName: "Unk3300NCLDOGNCHGF", T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "business_type", kind: "enum", T: () => ["GCGGameBusinessType", GCGGameBusinessType_1.GCGGameBusinessType] },
            { no: 14, name: "Unk3300_FJJDMIBIBJN", kind: "scalar", jsonName: "Unk3300FJJDMIBIBJN", T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "platform_type", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "game_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "player_brief_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => GCGPlayerBriefData_1.GCGPlayerBriefData }
        ]);
    }
    create(value) {
        const message = { unk3300NCLDOGNCHGF: 0, businessType: 0, unk3300FJJDMIBIBJN: 0, platformType: 0, gameId: 0, playerBriefList: [] };
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
                case /* uint32 Unk3300_NCLDOGNCHGF = 13 [json_name = "Unk3300NCLDOGNCHGF"];*/ 13:
                    message.unk3300NCLDOGNCHGF = reader.uint32();
                    break;
                case /* GCGGameBusinessType business_type */ 8:
                    message.businessType = reader.int32();
                    break;
                case /* uint32 Unk3300_FJJDMIBIBJN = 14 [json_name = "Unk3300FJJDMIBIBJN"];*/ 14:
                    message.unk3300FJJDMIBIBJN = reader.uint32();
                    break;
                case /* uint32 platform_type */ 6:
                    message.platformType = reader.uint32();
                    break;
                case /* uint32 game_id */ 12:
                    message.gameId = reader.uint32();
                    break;
                case /* repeated GCGPlayerBriefData player_brief_list */ 5:
                    message.playerBriefList.push(GCGPlayerBriefData_1.GCGPlayerBriefData.internalBinaryRead(reader, reader.uint32(), options));
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
        /* uint32 Unk3300_NCLDOGNCHGF = 13 [json_name = "Unk3300NCLDOGNCHGF"]; */
        if (message.unk3300NCLDOGNCHGF !== 0)
            writer.tag(13, runtime_1.WireType.Varint).uint32(message.unk3300NCLDOGNCHGF);
        /* GCGGameBusinessType business_type = 8; */
        if (message.businessType !== 0)
            writer.tag(8, runtime_1.WireType.Varint).int32(message.businessType);
        /* uint32 Unk3300_FJJDMIBIBJN = 14 [json_name = "Unk3300FJJDMIBIBJN"]; */
        if (message.unk3300FJJDMIBIBJN !== 0)
            writer.tag(14, runtime_1.WireType.Varint).uint32(message.unk3300FJJDMIBIBJN);
        /* uint32 platform_type = 6; */
        if (message.platformType !== 0)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.platformType);
        /* uint32 game_id = 12; */
        if (message.gameId !== 0)
            writer.tag(12, runtime_1.WireType.Varint).uint32(message.gameId);
        /* repeated GCGPlayerBriefData player_brief_list = 5; */
        for (let i = 0; i < message.playerBriefList.length; i++)
            GCGPlayerBriefData_1.GCGPlayerBriefData.internalBinaryWrite(message.playerBriefList[i], writer.tag(5, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message GCGGameBriefData
 */
exports.GCGGameBriefData = new GCGGameBriefData$Type();
