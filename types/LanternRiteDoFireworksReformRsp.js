"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LanternRiteDoFireworksReformRsp = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const LanternRiteFireworksReformFactorInfo_1 = require("./LanternRiteFireworksReformFactorInfo");
// @generated message type with reflection information, may provide speed optimized methods
class LanternRiteDoFireworksReformRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("LanternRiteDoFireworksReformRsp", [
            { no: 6, name: "factor_info_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => LanternRiteFireworksReformFactorInfo_1.LanternRiteFireworksReformFactorInfo },
            { no: 4, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 12, name: "Unk3300_BJHGCFANMBI", kind: "scalar", jsonName: "Unk3300BJHGCFANMBI", T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "Unk3300_OMHPIGGDCBO", kind: "scalar", jsonName: "Unk3300OMHPIGGDCBO", T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "challenge_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "Unk3300_LKOFBPDKEGG", kind: "scalar", jsonName: "Unk3300LKOFBPDKEGG", T: 13 /*ScalarType.UINT32*/ },
            { no: 1, name: "is_lucky", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 14, name: "Unk3300_LKKBPAJOCML", kind: "scalar", jsonName: "Unk3300LKKBPAJOCML", T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "stage_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { factorInfoList: [], retcode: 0, unk3300BJHGCFANMBI: 0, unk3300OMHPIGGDCBO: 0, challengeId: 0, unk3300LKOFBPDKEGG: 0, isLucky: false, unk3300LKKBPAJOCML: 0, stageId: 0 };
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
                case /* repeated LanternRiteFireworksReformFactorInfo factor_info_list */ 6:
                    message.factorInfoList.push(LanternRiteFireworksReformFactorInfo_1.LanternRiteFireworksReformFactorInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* int32 retcode */ 4:
                    message.retcode = reader.int32();
                    break;
                case /* uint32 Unk3300_BJHGCFANMBI = 12 [json_name = "Unk3300BJHGCFANMBI"];*/ 12:
                    message.unk3300BJHGCFANMBI = reader.uint32();
                    break;
                case /* uint32 Unk3300_OMHPIGGDCBO = 10 [json_name = "Unk3300OMHPIGGDCBO"];*/ 10:
                    message.unk3300OMHPIGGDCBO = reader.uint32();
                    break;
                case /* uint32 challenge_id */ 9:
                    message.challengeId = reader.uint32();
                    break;
                case /* uint32 Unk3300_LKOFBPDKEGG = 8 [json_name = "Unk3300LKOFBPDKEGG"];*/ 8:
                    message.unk3300LKOFBPDKEGG = reader.uint32();
                    break;
                case /* bool is_lucky */ 1:
                    message.isLucky = reader.bool();
                    break;
                case /* uint32 Unk3300_LKKBPAJOCML = 14 [json_name = "Unk3300LKKBPAJOCML"];*/ 14:
                    message.unk3300LKKBPAJOCML = reader.uint32();
                    break;
                case /* uint32 stage_id */ 15:
                    message.stageId = reader.uint32();
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
        /* repeated LanternRiteFireworksReformFactorInfo factor_info_list = 6; */
        for (let i = 0; i < message.factorInfoList.length; i++)
            LanternRiteFireworksReformFactorInfo_1.LanternRiteFireworksReformFactorInfo.internalBinaryWrite(message.factorInfoList[i], writer.tag(6, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* int32 retcode = 4; */
        if (message.retcode !== 0)
            writer.tag(4, runtime_1.WireType.Varint).int32(message.retcode);
        /* uint32 Unk3300_BJHGCFANMBI = 12 [json_name = "Unk3300BJHGCFANMBI"]; */
        if (message.unk3300BJHGCFANMBI !== 0)
            writer.tag(12, runtime_1.WireType.Varint).uint32(message.unk3300BJHGCFANMBI);
        /* uint32 Unk3300_OMHPIGGDCBO = 10 [json_name = "Unk3300OMHPIGGDCBO"]; */
        if (message.unk3300OMHPIGGDCBO !== 0)
            writer.tag(10, runtime_1.WireType.Varint).uint32(message.unk3300OMHPIGGDCBO);
        /* uint32 challenge_id = 9; */
        if (message.challengeId !== 0)
            writer.tag(9, runtime_1.WireType.Varint).uint32(message.challengeId);
        /* uint32 Unk3300_LKOFBPDKEGG = 8 [json_name = "Unk3300LKOFBPDKEGG"]; */
        if (message.unk3300LKOFBPDKEGG !== 0)
            writer.tag(8, runtime_1.WireType.Varint).uint32(message.unk3300LKOFBPDKEGG);
        /* bool is_lucky = 1; */
        if (message.isLucky !== false)
            writer.tag(1, runtime_1.WireType.Varint).bool(message.isLucky);
        /* uint32 Unk3300_LKKBPAJOCML = 14 [json_name = "Unk3300LKKBPAJOCML"]; */
        if (message.unk3300LKKBPAJOCML !== 0)
            writer.tag(14, runtime_1.WireType.Varint).uint32(message.unk3300LKKBPAJOCML);
        /* uint32 stage_id = 15; */
        if (message.stageId !== 0)
            writer.tag(15, runtime_1.WireType.Varint).uint32(message.stageId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message LanternRiteDoFireworksReformRsp
 */
exports.LanternRiteDoFireworksReformRsp = new LanternRiteDoFireworksReformRsp$Type();
