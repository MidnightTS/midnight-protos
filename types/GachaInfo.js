"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GachaInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const GachaUpInfo_1 = require("./GachaUpInfo");
// @generated message type with reflection information, may provide speed optimized methods
class GachaInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("GachaInfo", [
            { no: 5, name: "Unk3300_JLELMHELIDC", kind: "scalar", jsonName: "Unk3300JLELMHELIDC", T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "gacha_type", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 954, name: "Unk3300_NMOKGFGDFFC", kind: "scalar", jsonName: "Unk3300NMOKGFGDFFC", T: 13 /*ScalarType.UINT32*/ },
            { no: 1532, name: "Unk3300_GKDEEFNFCAC", kind: "scalar", jsonName: "Unk3300GKDEEFNFCAC", T: 9 /*ScalarType.STRING*/ },
            { no: 15, name: "Unk3300_FOGPKBALHPI", kind: "scalar", jsonName: "Unk3300FOGPKBALHPI", T: 9 /*ScalarType.STRING*/ },
            { no: 1, name: "Unk3300_HLPKLMGIBIB", kind: "scalar", jsonName: "Unk3300HLPKLMGIBIB", T: 9 /*ScalarType.STRING*/ },
            { no: 14, name: "begin_time", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "schedule_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 476, name: "Unk3300_LBLEBDLJDLL", kind: "scalar", jsonName: "Unk3300LBLEBDLJDLL", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "Unk3300_GLPMIEMBGGL", kind: "scalar", jsonName: "Unk3300GLPMIEMBGGL", T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "Unk3300_BCJONGECBOH", kind: "scalar", jsonName: "Unk3300BCJONGECBOH", T: 9 /*ScalarType.STRING*/ },
            { no: 114, name: "Unk3300_JOGAHFBKHNJ", kind: "scalar", jsonName: "Unk3300JOGAHFBKHNJ", T: 9 /*ScalarType.STRING*/ },
            { no: 245, name: "Unk3300_HLANONBCBLM", kind: "scalar", jsonName: "Unk3300HLANONBCBLM", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "end_time", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 540, name: "Unk3300_COABNBJCKEO", kind: "scalar", jsonName: "Unk3300COABNBJCKEO", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "Unk3300_MEDMCPFCIOO", kind: "scalar", jsonName: "Unk3300MEDMCPFCIOO", T: 13 /*ScalarType.UINT32*/ },
            { no: 1275, name: "Unk3300_BLLMPAJNCPI", kind: "scalar", jsonName: "Unk3300BLLMPAJNCPI", T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "Unk3300_DBFMKAMNPCL", kind: "scalar", jsonName: "Unk3300DBFMKAMNPCL", T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "Unk3300_DDBOLMGHEKN", kind: "scalar", jsonName: "Unk3300DDBOLMGHEKN", T: 13 /*ScalarType.UINT32*/ },
            { no: 967, name: "is_new_wish", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 12, name: "Unk3300_JLBFLPEMAPP", kind: "scalar", jsonName: "Unk3300JLBFLPEMAPP", T: 13 /*ScalarType.UINT32*/ },
            { no: 1580, name: "Unk3300_KEIJFMKAKDH", kind: "scalar", jsonName: "Unk3300KEIJFMKAKDH", T: 13 /*ScalarType.UINT32*/ },
            { no: 1259, name: "Unk3300_ODFKNFOMAGE", kind: "scalar", jsonName: "Unk3300ODFKNFOMAGE", T: 9 /*ScalarType.STRING*/ },
            { no: 1585, name: "gacha_up_info_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => GachaUpInfo_1.GachaUpInfo },
            { no: 3, name: "Unk3300_PLFMMOFNGAG", kind: "scalar", jsonName: "Unk3300PLFMMOFNGAG", T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "Unk3300_OFOHDLDFCLF", kind: "scalar", jsonName: "Unk3300OFOHDLDFCLF", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value) {
        const message = { unk3300JLELMHELIDC: 0, gachaType: 0, unk3300NMOKGFGDFFC: 0, unk3300GKDEEFNFCAC: "", unk3300FOGPKBALHPI: "", unk3300HLPKLMGIBIB: "", beginTime: 0, scheduleId: 0, unk3300LBLEBDLJDLL: [], unk3300GLPMIEMBGGL: 0, unk3300BCJONGECBOH: "", unk3300JOGAHFBKHNJ: "", unk3300HLANONBCBLM: 0, endTime: 0, unk3300COABNBJCKEO: [], unk3300MEDMCPFCIOO: 0, unk3300BLLMPAJNCPI: 0, unk3300DBFMKAMNPCL: 0, unk3300DDBOLMGHEKN: 0, isNewWish: false, unk3300JLBFLPEMAPP: 0, unk3300KEIJFMKAKDH: 0, unk3300ODFKNFOMAGE: "", gachaUpInfoList: [], unk3300PLFMMOFNGAG: 0, unk3300OFOHDLDFCLF: "" };
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
                case /* uint32 Unk3300_JLELMHELIDC = 5 [json_name = "Unk3300JLELMHELIDC"];*/ 5:
                    message.unk3300JLELMHELIDC = reader.uint32();
                    break;
                case /* uint32 gacha_type */ 7:
                    message.gachaType = reader.uint32();
                    break;
                case /* uint32 Unk3300_NMOKGFGDFFC = 954 [json_name = "Unk3300NMOKGFGDFFC"];*/ 954:
                    message.unk3300NMOKGFGDFFC = reader.uint32();
                    break;
                case /* string Unk3300_GKDEEFNFCAC = 1532 [json_name = "Unk3300GKDEEFNFCAC"];*/ 1532:
                    message.unk3300GKDEEFNFCAC = reader.string();
                    break;
                case /* string Unk3300_FOGPKBALHPI = 15 [json_name = "Unk3300FOGPKBALHPI"];*/ 15:
                    message.unk3300FOGPKBALHPI = reader.string();
                    break;
                case /* string Unk3300_HLPKLMGIBIB = 1 [json_name = "Unk3300HLPKLMGIBIB"];*/ 1:
                    message.unk3300HLPKLMGIBIB = reader.string();
                    break;
                case /* uint32 begin_time */ 14:
                    message.beginTime = reader.uint32();
                    break;
                case /* uint32 schedule_id */ 8:
                    message.scheduleId = reader.uint32();
                    break;
                case /* repeated uint32 Unk3300_LBLEBDLJDLL = 476 [json_name = "Unk3300LBLEBDLJDLL"];*/ 476:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.unk3300LBLEBDLJDLL.push(reader.uint32());
                    else
                        message.unk3300LBLEBDLJDLL.push(reader.uint32());
                    break;
                case /* uint32 Unk3300_GLPMIEMBGGL = 10 [json_name = "Unk3300GLPMIEMBGGL"];*/ 10:
                    message.unk3300GLPMIEMBGGL = reader.uint32();
                    break;
                case /* string Unk3300_BCJONGECBOH = 4 [json_name = "Unk3300BCJONGECBOH"];*/ 4:
                    message.unk3300BCJONGECBOH = reader.string();
                    break;
                case /* string Unk3300_JOGAHFBKHNJ = 114 [json_name = "Unk3300JOGAHFBKHNJ"];*/ 114:
                    message.unk3300JOGAHFBKHNJ = reader.string();
                    break;
                case /* uint32 Unk3300_HLANONBCBLM = 245 [json_name = "Unk3300HLANONBCBLM"];*/ 245:
                    message.unk3300HLANONBCBLM = reader.uint32();
                    break;
                case /* uint32 end_time */ 2:
                    message.endTime = reader.uint32();
                    break;
                case /* repeated uint32 Unk3300_COABNBJCKEO = 540 [json_name = "Unk3300COABNBJCKEO"];*/ 540:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.unk3300COABNBJCKEO.push(reader.uint32());
                    else
                        message.unk3300COABNBJCKEO.push(reader.uint32());
                    break;
                case /* uint32 Unk3300_MEDMCPFCIOO = 13 [json_name = "Unk3300MEDMCPFCIOO"];*/ 13:
                    message.unk3300MEDMCPFCIOO = reader.uint32();
                    break;
                case /* uint32 Unk3300_BLLMPAJNCPI = 1275 [json_name = "Unk3300BLLMPAJNCPI"];*/ 1275:
                    message.unk3300BLLMPAJNCPI = reader.uint32();
                    break;
                case /* uint32 Unk3300_DBFMKAMNPCL = 9 [json_name = "Unk3300DBFMKAMNPCL"];*/ 9:
                    message.unk3300DBFMKAMNPCL = reader.uint32();
                    break;
                case /* uint32 Unk3300_DDBOLMGHEKN = 6 [json_name = "Unk3300DDBOLMGHEKN"];*/ 6:
                    message.unk3300DDBOLMGHEKN = reader.uint32();
                    break;
                case /* bool is_new_wish */ 967:
                    message.isNewWish = reader.bool();
                    break;
                case /* uint32 Unk3300_JLBFLPEMAPP = 12 [json_name = "Unk3300JLBFLPEMAPP"];*/ 12:
                    message.unk3300JLBFLPEMAPP = reader.uint32();
                    break;
                case /* uint32 Unk3300_KEIJFMKAKDH = 1580 [json_name = "Unk3300KEIJFMKAKDH"];*/ 1580:
                    message.unk3300KEIJFMKAKDH = reader.uint32();
                    break;
                case /* string Unk3300_ODFKNFOMAGE = 1259 [json_name = "Unk3300ODFKNFOMAGE"];*/ 1259:
                    message.unk3300ODFKNFOMAGE = reader.string();
                    break;
                case /* repeated GachaUpInfo gacha_up_info_list */ 1585:
                    message.gachaUpInfoList.push(GachaUpInfo_1.GachaUpInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* uint32 Unk3300_PLFMMOFNGAG = 3 [json_name = "Unk3300PLFMMOFNGAG"];*/ 3:
                    message.unk3300PLFMMOFNGAG = reader.uint32();
                    break;
                case /* string Unk3300_OFOHDLDFCLF = 11 [json_name = "Unk3300OFOHDLDFCLF"];*/ 11:
                    message.unk3300OFOHDLDFCLF = reader.string();
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
        /* uint32 Unk3300_JLELMHELIDC = 5 [json_name = "Unk3300JLELMHELIDC"]; */
        if (message.unk3300JLELMHELIDC !== 0)
            writer.tag(5, runtime_2.WireType.Varint).uint32(message.unk3300JLELMHELIDC);
        /* uint32 gacha_type = 7; */
        if (message.gachaType !== 0)
            writer.tag(7, runtime_2.WireType.Varint).uint32(message.gachaType);
        /* uint32 Unk3300_NMOKGFGDFFC = 954 [json_name = "Unk3300NMOKGFGDFFC"]; */
        if (message.unk3300NMOKGFGDFFC !== 0)
            writer.tag(954, runtime_2.WireType.Varint).uint32(message.unk3300NMOKGFGDFFC);
        /* string Unk3300_GKDEEFNFCAC = 1532 [json_name = "Unk3300GKDEEFNFCAC"]; */
        if (message.unk3300GKDEEFNFCAC !== "")
            writer.tag(1532, runtime_2.WireType.LengthDelimited).string(message.unk3300GKDEEFNFCAC);
        /* string Unk3300_FOGPKBALHPI = 15 [json_name = "Unk3300FOGPKBALHPI"]; */
        if (message.unk3300FOGPKBALHPI !== "")
            writer.tag(15, runtime_2.WireType.LengthDelimited).string(message.unk3300FOGPKBALHPI);
        /* string Unk3300_HLPKLMGIBIB = 1 [json_name = "Unk3300HLPKLMGIBIB"]; */
        if (message.unk3300HLPKLMGIBIB !== "")
            writer.tag(1, runtime_2.WireType.LengthDelimited).string(message.unk3300HLPKLMGIBIB);
        /* uint32 begin_time = 14; */
        if (message.beginTime !== 0)
            writer.tag(14, runtime_2.WireType.Varint).uint32(message.beginTime);
        /* uint32 schedule_id = 8; */
        if (message.scheduleId !== 0)
            writer.tag(8, runtime_2.WireType.Varint).uint32(message.scheduleId);
        /* repeated uint32 Unk3300_LBLEBDLJDLL = 476 [json_name = "Unk3300LBLEBDLJDLL"]; */
        if (message.unk3300LBLEBDLJDLL.length) {
            writer.tag(476, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.unk3300LBLEBDLJDLL.length; i++)
                writer.uint32(message.unk3300LBLEBDLJDLL[i]);
            writer.join();
        }
        /* uint32 Unk3300_GLPMIEMBGGL = 10 [json_name = "Unk3300GLPMIEMBGGL"]; */
        if (message.unk3300GLPMIEMBGGL !== 0)
            writer.tag(10, runtime_2.WireType.Varint).uint32(message.unk3300GLPMIEMBGGL);
        /* string Unk3300_BCJONGECBOH = 4 [json_name = "Unk3300BCJONGECBOH"]; */
        if (message.unk3300BCJONGECBOH !== "")
            writer.tag(4, runtime_2.WireType.LengthDelimited).string(message.unk3300BCJONGECBOH);
        /* string Unk3300_JOGAHFBKHNJ = 114 [json_name = "Unk3300JOGAHFBKHNJ"]; */
        if (message.unk3300JOGAHFBKHNJ !== "")
            writer.tag(114, runtime_2.WireType.LengthDelimited).string(message.unk3300JOGAHFBKHNJ);
        /* uint32 Unk3300_HLANONBCBLM = 245 [json_name = "Unk3300HLANONBCBLM"]; */
        if (message.unk3300HLANONBCBLM !== 0)
            writer.tag(245, runtime_2.WireType.Varint).uint32(message.unk3300HLANONBCBLM);
        /* uint32 end_time = 2; */
        if (message.endTime !== 0)
            writer.tag(2, runtime_2.WireType.Varint).uint32(message.endTime);
        /* repeated uint32 Unk3300_COABNBJCKEO = 540 [json_name = "Unk3300COABNBJCKEO"]; */
        if (message.unk3300COABNBJCKEO.length) {
            writer.tag(540, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.unk3300COABNBJCKEO.length; i++)
                writer.uint32(message.unk3300COABNBJCKEO[i]);
            writer.join();
        }
        /* uint32 Unk3300_MEDMCPFCIOO = 13 [json_name = "Unk3300MEDMCPFCIOO"]; */
        if (message.unk3300MEDMCPFCIOO !== 0)
            writer.tag(13, runtime_2.WireType.Varint).uint32(message.unk3300MEDMCPFCIOO);
        /* uint32 Unk3300_BLLMPAJNCPI = 1275 [json_name = "Unk3300BLLMPAJNCPI"]; */
        if (message.unk3300BLLMPAJNCPI !== 0)
            writer.tag(1275, runtime_2.WireType.Varint).uint32(message.unk3300BLLMPAJNCPI);
        /* uint32 Unk3300_DBFMKAMNPCL = 9 [json_name = "Unk3300DBFMKAMNPCL"]; */
        if (message.unk3300DBFMKAMNPCL !== 0)
            writer.tag(9, runtime_2.WireType.Varint).uint32(message.unk3300DBFMKAMNPCL);
        /* uint32 Unk3300_DDBOLMGHEKN = 6 [json_name = "Unk3300DDBOLMGHEKN"]; */
        if (message.unk3300DDBOLMGHEKN !== 0)
            writer.tag(6, runtime_2.WireType.Varint).uint32(message.unk3300DDBOLMGHEKN);
        /* bool is_new_wish = 967; */
        if (message.isNewWish !== false)
            writer.tag(967, runtime_2.WireType.Varint).bool(message.isNewWish);
        /* uint32 Unk3300_JLBFLPEMAPP = 12 [json_name = "Unk3300JLBFLPEMAPP"]; */
        if (message.unk3300JLBFLPEMAPP !== 0)
            writer.tag(12, runtime_2.WireType.Varint).uint32(message.unk3300JLBFLPEMAPP);
        /* uint32 Unk3300_KEIJFMKAKDH = 1580 [json_name = "Unk3300KEIJFMKAKDH"]; */
        if (message.unk3300KEIJFMKAKDH !== 0)
            writer.tag(1580, runtime_2.WireType.Varint).uint32(message.unk3300KEIJFMKAKDH);
        /* string Unk3300_ODFKNFOMAGE = 1259 [json_name = "Unk3300ODFKNFOMAGE"]; */
        if (message.unk3300ODFKNFOMAGE !== "")
            writer.tag(1259, runtime_2.WireType.LengthDelimited).string(message.unk3300ODFKNFOMAGE);
        /* repeated GachaUpInfo gacha_up_info_list = 1585; */
        for (let i = 0; i < message.gachaUpInfoList.length; i++)
            GachaUpInfo_1.GachaUpInfo.internalBinaryWrite(message.gachaUpInfoList[i], writer.tag(1585, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* uint32 Unk3300_PLFMMOFNGAG = 3 [json_name = "Unk3300PLFMMOFNGAG"]; */
        if (message.unk3300PLFMMOFNGAG !== 0)
            writer.tag(3, runtime_2.WireType.Varint).uint32(message.unk3300PLFMMOFNGAG);
        /* string Unk3300_OFOHDLDFCLF = 11 [json_name = "Unk3300OFOHDLDFCLF"]; */
        if (message.unk3300OFOHDLDFCLF !== "")
            writer.tag(11, runtime_2.WireType.LengthDelimited).string(message.unk3300OFOHDLDFCLF);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message GachaInfo
 */
exports.GachaInfo = new GachaInfo$Type();
