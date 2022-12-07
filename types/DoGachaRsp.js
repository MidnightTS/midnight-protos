"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DoGachaRsp = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const GachaItem_1 = require("./GachaItem");
// @generated message type with reflection information, may provide speed optimized methods
class DoGachaRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("DoGachaRsp", [
            { no: 1812, name: "Unk3300_OHFMHIHJHPJ", kind: "scalar", jsonName: "Unk3300OHFMHIHJHPJ", T: 8 /*ScalarType.BOOL*/ },
            { no: 3, name: "Unk3300_JLELMHELIDC", kind: "scalar", jsonName: "Unk3300JLELMHELIDC", T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "gacha_item_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => GachaItem_1.GachaItem },
            { no: 1887, name: "Unk3300_HBILIAEIHNK", kind: "scalar", jsonName: "Unk3300HBILIAEIHNK", T: 8 /*ScalarType.BOOL*/ },
            { no: 10, name: "gacha_type", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "Unk3300_OPGAHAGHEPF", kind: "scalar", jsonName: "Unk3300OPGAHAGHEPF", T: 13 /*ScalarType.UINT32*/ },
            { no: 1, name: "Unk3300_NMOKGFGDFFC", kind: "scalar", jsonName: "Unk3300NMOKGFGDFFC", T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "Unk3300_BLLMPAJNCPI", kind: "scalar", jsonName: "Unk3300BLLMPAJNCPI", T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "gacha_times", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "Unk3300_GLPMIEMBGGL", kind: "scalar", jsonName: "Unk3300GLPMIEMBGGL", T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "Unk3300_KEIJFMKAKDH", kind: "scalar", jsonName: "Unk3300KEIJFMKAKDH", T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "Unk3300_DBFMKAMNPCL", kind: "scalar", jsonName: "Unk3300DBFMKAMNPCL", T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "Unk3300_JLBFLPEMAPP", kind: "scalar", jsonName: "Unk3300JLBFLPEMAPP", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "Unk3300_MEDMCPFCIOO", kind: "scalar", jsonName: "Unk3300MEDMCPFCIOO", T: 13 /*ScalarType.UINT32*/ },
            { no: 1550, name: "Unk3300_HLANONBCBLM", kind: "scalar", jsonName: "Unk3300HLANONBCBLM", T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "Unk3300_PLFMMOFNGAG", kind: "scalar", jsonName: "Unk3300PLFMMOFNGAG", T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "gacha_schedule_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 467, name: "daily_gacha_times", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ }
        ]);
    }
    create(value) {
        const message = { unk3300OHFMHIHJHPJ: false, unk3300JLELMHELIDC: 0, gachaItemList: [], unk3300HBILIAEIHNK: false, gachaType: 0, unk3300OPGAHAGHEPF: 0, unk3300NMOKGFGDFFC: 0, unk3300BLLMPAJNCPI: 0, gachaTimes: 0, unk3300GLPMIEMBGGL: 0, unk3300KEIJFMKAKDH: 0, unk3300DBFMKAMNPCL: 0, unk3300JLBFLPEMAPP: 0, unk3300MEDMCPFCIOO: 0, unk3300HLANONBCBLM: 0, unk3300PLFMMOFNGAG: 0, gachaScheduleId: 0, dailyGachaTimes: 0, retcode: 0 };
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
                case /* bool Unk3300_OHFMHIHJHPJ = 1812 [json_name = "Unk3300OHFMHIHJHPJ"];*/ 1812:
                    message.unk3300OHFMHIHJHPJ = reader.bool();
                    break;
                case /* uint32 Unk3300_JLELMHELIDC = 3 [json_name = "Unk3300JLELMHELIDC"];*/ 3:
                    message.unk3300JLELMHELIDC = reader.uint32();
                    break;
                case /* repeated GachaItem gacha_item_list */ 9:
                    message.gachaItemList.push(GachaItem_1.GachaItem.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* bool Unk3300_HBILIAEIHNK = 1887 [json_name = "Unk3300HBILIAEIHNK"];*/ 1887:
                    message.unk3300HBILIAEIHNK = reader.bool();
                    break;
                case /* uint32 gacha_type */ 10:
                    message.gachaType = reader.uint32();
                    break;
                case /* uint32 Unk3300_OPGAHAGHEPF = 6 [json_name = "Unk3300OPGAHAGHEPF"];*/ 6:
                    message.unk3300OPGAHAGHEPF = reader.uint32();
                    break;
                case /* uint32 Unk3300_NMOKGFGDFFC = 1 [json_name = "Unk3300NMOKGFGDFFC"];*/ 1:
                    message.unk3300NMOKGFGDFFC = reader.uint32();
                    break;
                case /* uint32 Unk3300_BLLMPAJNCPI = 5 [json_name = "Unk3300BLLMPAJNCPI"];*/ 5:
                    message.unk3300BLLMPAJNCPI = reader.uint32();
                    break;
                case /* uint32 gacha_times */ 4:
                    message.gachaTimes = reader.uint32();
                    break;
                case /* uint32 Unk3300_GLPMIEMBGGL = 15 [json_name = "Unk3300GLPMIEMBGGL"];*/ 15:
                    message.unk3300GLPMIEMBGGL = reader.uint32();
                    break;
                case /* uint32 Unk3300_KEIJFMKAKDH = 12 [json_name = "Unk3300KEIJFMKAKDH"];*/ 12:
                    message.unk3300KEIJFMKAKDH = reader.uint32();
                    break;
                case /* uint32 Unk3300_DBFMKAMNPCL = 13 [json_name = "Unk3300DBFMKAMNPCL"];*/ 13:
                    message.unk3300DBFMKAMNPCL = reader.uint32();
                    break;
                case /* uint32 Unk3300_JLBFLPEMAPP = 8 [json_name = "Unk3300JLBFLPEMAPP"];*/ 8:
                    message.unk3300JLBFLPEMAPP = reader.uint32();
                    break;
                case /* uint32 Unk3300_MEDMCPFCIOO = 2 [json_name = "Unk3300MEDMCPFCIOO"];*/ 2:
                    message.unk3300MEDMCPFCIOO = reader.uint32();
                    break;
                case /* uint32 Unk3300_HLANONBCBLM = 1550 [json_name = "Unk3300HLANONBCBLM"];*/ 1550:
                    message.unk3300HLANONBCBLM = reader.uint32();
                    break;
                case /* uint32 Unk3300_PLFMMOFNGAG = 7 [json_name = "Unk3300PLFMMOFNGAG"];*/ 7:
                    message.unk3300PLFMMOFNGAG = reader.uint32();
                    break;
                case /* uint32 gacha_schedule_id */ 14:
                    message.gachaScheduleId = reader.uint32();
                    break;
                case /* uint32 daily_gacha_times */ 467:
                    message.dailyGachaTimes = reader.uint32();
                    break;
                case /* int32 retcode */ 11:
                    message.retcode = reader.int32();
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
        /* bool Unk3300_OHFMHIHJHPJ = 1812 [json_name = "Unk3300OHFMHIHJHPJ"]; */
        if (message.unk3300OHFMHIHJHPJ !== false)
            writer.tag(1812, runtime_1.WireType.Varint).bool(message.unk3300OHFMHIHJHPJ);
        /* uint32 Unk3300_JLELMHELIDC = 3 [json_name = "Unk3300JLELMHELIDC"]; */
        if (message.unk3300JLELMHELIDC !== 0)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.unk3300JLELMHELIDC);
        /* repeated GachaItem gacha_item_list = 9; */
        for (let i = 0; i < message.gachaItemList.length; i++)
            GachaItem_1.GachaItem.internalBinaryWrite(message.gachaItemList[i], writer.tag(9, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* bool Unk3300_HBILIAEIHNK = 1887 [json_name = "Unk3300HBILIAEIHNK"]; */
        if (message.unk3300HBILIAEIHNK !== false)
            writer.tag(1887, runtime_1.WireType.Varint).bool(message.unk3300HBILIAEIHNK);
        /* uint32 gacha_type = 10; */
        if (message.gachaType !== 0)
            writer.tag(10, runtime_1.WireType.Varint).uint32(message.gachaType);
        /* uint32 Unk3300_OPGAHAGHEPF = 6 [json_name = "Unk3300OPGAHAGHEPF"]; */
        if (message.unk3300OPGAHAGHEPF !== 0)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.unk3300OPGAHAGHEPF);
        /* uint32 Unk3300_NMOKGFGDFFC = 1 [json_name = "Unk3300NMOKGFGDFFC"]; */
        if (message.unk3300NMOKGFGDFFC !== 0)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.unk3300NMOKGFGDFFC);
        /* uint32 Unk3300_BLLMPAJNCPI = 5 [json_name = "Unk3300BLLMPAJNCPI"]; */
        if (message.unk3300BLLMPAJNCPI !== 0)
            writer.tag(5, runtime_1.WireType.Varint).uint32(message.unk3300BLLMPAJNCPI);
        /* uint32 gacha_times = 4; */
        if (message.gachaTimes !== 0)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.gachaTimes);
        /* uint32 Unk3300_GLPMIEMBGGL = 15 [json_name = "Unk3300GLPMIEMBGGL"]; */
        if (message.unk3300GLPMIEMBGGL !== 0)
            writer.tag(15, runtime_1.WireType.Varint).uint32(message.unk3300GLPMIEMBGGL);
        /* uint32 Unk3300_KEIJFMKAKDH = 12 [json_name = "Unk3300KEIJFMKAKDH"]; */
        if (message.unk3300KEIJFMKAKDH !== 0)
            writer.tag(12, runtime_1.WireType.Varint).uint32(message.unk3300KEIJFMKAKDH);
        /* uint32 Unk3300_DBFMKAMNPCL = 13 [json_name = "Unk3300DBFMKAMNPCL"]; */
        if (message.unk3300DBFMKAMNPCL !== 0)
            writer.tag(13, runtime_1.WireType.Varint).uint32(message.unk3300DBFMKAMNPCL);
        /* uint32 Unk3300_JLBFLPEMAPP = 8 [json_name = "Unk3300JLBFLPEMAPP"]; */
        if (message.unk3300JLBFLPEMAPP !== 0)
            writer.tag(8, runtime_1.WireType.Varint).uint32(message.unk3300JLBFLPEMAPP);
        /* uint32 Unk3300_MEDMCPFCIOO = 2 [json_name = "Unk3300MEDMCPFCIOO"]; */
        if (message.unk3300MEDMCPFCIOO !== 0)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.unk3300MEDMCPFCIOO);
        /* uint32 Unk3300_HLANONBCBLM = 1550 [json_name = "Unk3300HLANONBCBLM"]; */
        if (message.unk3300HLANONBCBLM !== 0)
            writer.tag(1550, runtime_1.WireType.Varint).uint32(message.unk3300HLANONBCBLM);
        /* uint32 Unk3300_PLFMMOFNGAG = 7 [json_name = "Unk3300PLFMMOFNGAG"]; */
        if (message.unk3300PLFMMOFNGAG !== 0)
            writer.tag(7, runtime_1.WireType.Varint).uint32(message.unk3300PLFMMOFNGAG);
        /* uint32 gacha_schedule_id = 14; */
        if (message.gachaScheduleId !== 0)
            writer.tag(14, runtime_1.WireType.Varint).uint32(message.gachaScheduleId);
        /* uint32 daily_gacha_times = 467; */
        if (message.dailyGachaTimes !== 0)
            writer.tag(467, runtime_1.WireType.Varint).uint32(message.dailyGachaTimes);
        /* int32 retcode = 11; */
        if (message.retcode !== 0)
            writer.tag(11, runtime_1.WireType.Varint).int32(message.retcode);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message DoGachaRsp
 */
exports.DoGachaRsp = new DoGachaRsp$Type();
