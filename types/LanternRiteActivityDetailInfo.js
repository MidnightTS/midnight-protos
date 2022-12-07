"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LanternRiteActivityDetailInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const LanternProjectionInfo_1 = require("./LanternProjectionInfo");
const LanternRiteFireworksInfo_1 = require("./LanternRiteFireworksInfo");
const SalvageStageInfo_1 = require("./SalvageStageInfo");
// @generated message type with reflection information, may provide speed optimized methods
class LanternRiteActivityDetailInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("LanternRiteActivityDetailInfo", [
            { no: 5, name: "stage_info_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => SalvageStageInfo_1.SalvageStageInfo },
            { no: 15, name: "fireworks_info", kind: "message", T: () => LanternRiteFireworksInfo_1.LanternRiteFireworksInfo },
            { no: 11, name: "Unk3300_PDFJNCDGKGH", kind: "scalar", jsonName: "Unk3300PDFJNCDGKGH", T: 8 /*ScalarType.BOOL*/ },
            { no: 3, name: "projection_info", kind: "message", T: () => LanternProjectionInfo_1.LanternProjectionInfo },
            { no: 8, name: "Unk3300_DKBJLCIMBAL", kind: "scalar", jsonName: "Unk3300DKBJLCIMBAL", T: 8 /*ScalarType.BOOL*/ },
            { no: 14, name: "is_content_closed", kind: "scalar", T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = { stageInfoList: [], unk3300PDFJNCDGKGH: false, unk3300DKBJLCIMBAL: false, isContentClosed: false };
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
                case /* repeated SalvageStageInfo stage_info_list */ 5:
                    message.stageInfoList.push(SalvageStageInfo_1.SalvageStageInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* LanternRiteFireworksInfo fireworks_info */ 15:
                    message.fireworksInfo = LanternRiteFireworksInfo_1.LanternRiteFireworksInfo.internalBinaryRead(reader, reader.uint32(), options, message.fireworksInfo);
                    break;
                case /* bool Unk3300_PDFJNCDGKGH = 11 [json_name = "Unk3300PDFJNCDGKGH"];*/ 11:
                    message.unk3300PDFJNCDGKGH = reader.bool();
                    break;
                case /* LanternProjectionInfo projection_info */ 3:
                    message.projectionInfo = LanternProjectionInfo_1.LanternProjectionInfo.internalBinaryRead(reader, reader.uint32(), options, message.projectionInfo);
                    break;
                case /* bool Unk3300_DKBJLCIMBAL = 8 [json_name = "Unk3300DKBJLCIMBAL"];*/ 8:
                    message.unk3300DKBJLCIMBAL = reader.bool();
                    break;
                case /* bool is_content_closed */ 14:
                    message.isContentClosed = reader.bool();
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
        /* repeated SalvageStageInfo stage_info_list = 5; */
        for (let i = 0; i < message.stageInfoList.length; i++)
            SalvageStageInfo_1.SalvageStageInfo.internalBinaryWrite(message.stageInfoList[i], writer.tag(5, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* LanternRiteFireworksInfo fireworks_info = 15; */
        if (message.fireworksInfo)
            LanternRiteFireworksInfo_1.LanternRiteFireworksInfo.internalBinaryWrite(message.fireworksInfo, writer.tag(15, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* bool Unk3300_PDFJNCDGKGH = 11 [json_name = "Unk3300PDFJNCDGKGH"]; */
        if (message.unk3300PDFJNCDGKGH !== false)
            writer.tag(11, runtime_1.WireType.Varint).bool(message.unk3300PDFJNCDGKGH);
        /* LanternProjectionInfo projection_info = 3; */
        if (message.projectionInfo)
            LanternProjectionInfo_1.LanternProjectionInfo.internalBinaryWrite(message.projectionInfo, writer.tag(3, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* bool Unk3300_DKBJLCIMBAL = 8 [json_name = "Unk3300DKBJLCIMBAL"]; */
        if (message.unk3300DKBJLCIMBAL !== false)
            writer.tag(8, runtime_1.WireType.Varint).bool(message.unk3300DKBJLCIMBAL);
        /* bool is_content_closed = 14; */
        if (message.isContentClosed !== false)
            writer.tag(14, runtime_1.WireType.Varint).bool(message.isContentClosed);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message LanternRiteActivityDetailInfo
 */
exports.LanternRiteActivityDetailInfo = new LanternRiteActivityDetailInfo$Type();
