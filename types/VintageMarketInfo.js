"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VintageMarketInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const VintageMarketDealInfo_1 = require("./VintageMarketDealInfo");
const VintageMarketStoreInfo_1 = require("./VintageMarketStoreInfo");
// @generated message type with reflection information, may provide speed optimized methods
class VintageMarketInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("VintageMarketInfo", [
            { no: 9, name: "bargain_info_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "scalar", T: 8 /*ScalarType.BOOL*/ } },
            { no: 8, name: "Unk3300_FJDIMCJEAOB", kind: "scalar", jsonName: "Unk3300FJDIMCJEAOB", T: 8 /*ScalarType.BOOL*/ },
            { no: 1007, name: "Unk3300_COKBOKAOCNJ", kind: "scalar", jsonName: "Unk3300COKBOKAOCNJ", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 760, name: "help_skill_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "Unk3300_ABHHACBDCFI", kind: "scalar", jsonName: "Unk3300ABHHACBDCFI", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "open_store_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => VintageMarketStoreInfo_1.VintageMarketStoreInfo },
            { no: 10, name: "Unk3300_EDBJLBICEJF", kind: "scalar", jsonName: "Unk3300EDBJLBICEJF", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "Unk3300_PAMKPAOCJJJ", kind: "scalar", jsonName: "Unk3300PAMKPAOCJJJ", T: 8 /*ScalarType.BOOL*/ },
            { no: 1826, name: "Unk3300_FOPKAIIAMFM", kind: "scalar", jsonName: "Unk3300FOPKAIIAMFM", T: 13 /*ScalarType.UINT32*/ },
            { no: 470, name: "Unk3300_NBNOJJBNJPB", kind: "scalar", jsonName: "Unk3300NBNOJJBNJPB", T: 8 /*ScalarType.BOOL*/ },
            { no: 12, name: "deal_info", kind: "message", T: () => VintageMarketDealInfo_1.VintageMarketDealInfo },
            { no: 3, name: "store_round", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "unlock_strategy_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "Unk3300_AIAMBBODLBO", kind: "scalar", jsonName: "Unk3300AIAMBBODLBO", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "Unk3300_NDFHAGHBCFN", kind: "scalar", jsonName: "Unk3300NDFHAGHBCFN", T: 8 /*ScalarType.BOOL*/ },
            { no: 1, name: "Unk3300_LMNLHHPMAMN", kind: "scalar", jsonName: "Unk3300LMNLHHPMAMN", T: 13 /*ScalarType.UINT32*/ },
            { no: 1594, name: "Unk3300_ALHLENELIEO", kind: "scalar", jsonName: "Unk3300ALHLENELIEO", T: 8 /*ScalarType.BOOL*/ },
            { no: 1658, name: "Unk3300_ACJLANLBCGK", kind: "scalar", jsonName: "Unk3300ACJLANLBCGK", T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "Unk3300_HHKKEDDIGLA", kind: "scalar", jsonName: "Unk3300HHKKEDDIGLA", T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "Unk3300_KJDEFIBKBPE", kind: "scalar", jsonName: "Unk3300KJDEFIBKBPE", T: 8 /*ScalarType.BOOL*/ },
            { no: 15, name: "Unk3300_ICJOCDGLFFD", kind: "scalar", jsonName: "Unk3300ICJOCDGLFFD", T: 8 /*ScalarType.BOOL*/ },
            { no: 1721, name: "Unk3300_NMHHGNPKBEL", kind: "scalar", jsonName: "Unk3300NMHHGNPKBEL", T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = { bargainInfoMap: {}, unk3300FJDIMCJEAOB: false, unk3300COKBOKAOCNJ: [], helpSkillId: 0, unk3300ABHHACBDCFI: [], openStoreList: [], unk3300EDBJLBICEJF: [], unk3300PAMKPAOCJJJ: false, unk3300FOPKAIIAMFM: 0, unk3300NBNOJJBNJPB: false, storeRound: 0, unlockStrategyList: [], unk3300AIAMBBODLBO: [], unk3300NDFHAGHBCFN: false, unk3300LMNLHHPMAMN: 0, unk3300ALHLENELIEO: false, unk3300ACJLANLBCGK: 0, unk3300HHKKEDDIGLA: 0, unk3300KJDEFIBKBPE: false, unk3300ICJOCDGLFFD: false, unk3300NMHHGNPKBEL: false };
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
                case /* map<uint32, bool> bargain_info_map */ 9:
                    this.binaryReadMap9(message.bargainInfoMap, reader, options);
                    break;
                case /* bool Unk3300_FJDIMCJEAOB = 8 [json_name = "Unk3300FJDIMCJEAOB"];*/ 8:
                    message.unk3300FJDIMCJEAOB = reader.bool();
                    break;
                case /* repeated uint32 Unk3300_COKBOKAOCNJ = 1007 [json_name = "Unk3300COKBOKAOCNJ"];*/ 1007:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.unk3300COKBOKAOCNJ.push(reader.uint32());
                    else
                        message.unk3300COKBOKAOCNJ.push(reader.uint32());
                    break;
                case /* uint32 help_skill_id */ 760:
                    message.helpSkillId = reader.uint32();
                    break;
                case /* repeated uint32 Unk3300_ABHHACBDCFI = 7 [json_name = "Unk3300ABHHACBDCFI"];*/ 7:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.unk3300ABHHACBDCFI.push(reader.uint32());
                    else
                        message.unk3300ABHHACBDCFI.push(reader.uint32());
                    break;
                case /* repeated VintageMarketStoreInfo open_store_list */ 2:
                    message.openStoreList.push(VintageMarketStoreInfo_1.VintageMarketStoreInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated uint32 Unk3300_EDBJLBICEJF = 10 [json_name = "Unk3300EDBJLBICEJF"];*/ 10:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.unk3300EDBJLBICEJF.push(reader.uint32());
                    else
                        message.unk3300EDBJLBICEJF.push(reader.uint32());
                    break;
                case /* bool Unk3300_PAMKPAOCJJJ = 11 [json_name = "Unk3300PAMKPAOCJJJ"];*/ 11:
                    message.unk3300PAMKPAOCJJJ = reader.bool();
                    break;
                case /* uint32 Unk3300_FOPKAIIAMFM = 1826 [json_name = "Unk3300FOPKAIIAMFM"];*/ 1826:
                    message.unk3300FOPKAIIAMFM = reader.uint32();
                    break;
                case /* bool Unk3300_NBNOJJBNJPB = 470 [json_name = "Unk3300NBNOJJBNJPB"];*/ 470:
                    message.unk3300NBNOJJBNJPB = reader.bool();
                    break;
                case /* VintageMarketDealInfo deal_info */ 12:
                    message.dealInfo = VintageMarketDealInfo_1.VintageMarketDealInfo.internalBinaryRead(reader, reader.uint32(), options, message.dealInfo);
                    break;
                case /* uint32 store_round */ 3:
                    message.storeRound = reader.uint32();
                    break;
                case /* repeated uint32 unlock_strategy_list */ 13:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.unlockStrategyList.push(reader.uint32());
                    else
                        message.unlockStrategyList.push(reader.uint32());
                    break;
                case /* repeated uint32 Unk3300_AIAMBBODLBO = 14 [json_name = "Unk3300AIAMBBODLBO"];*/ 14:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.unk3300AIAMBBODLBO.push(reader.uint32());
                    else
                        message.unk3300AIAMBBODLBO.push(reader.uint32());
                    break;
                case /* bool Unk3300_NDFHAGHBCFN = 6 [json_name = "Unk3300NDFHAGHBCFN"];*/ 6:
                    message.unk3300NDFHAGHBCFN = reader.bool();
                    break;
                case /* uint32 Unk3300_LMNLHHPMAMN = 1 [json_name = "Unk3300LMNLHHPMAMN"];*/ 1:
                    message.unk3300LMNLHHPMAMN = reader.uint32();
                    break;
                case /* bool Unk3300_ALHLENELIEO = 1594 [json_name = "Unk3300ALHLENELIEO"];*/ 1594:
                    message.unk3300ALHLENELIEO = reader.bool();
                    break;
                case /* uint32 Unk3300_ACJLANLBCGK = 1658 [json_name = "Unk3300ACJLANLBCGK"];*/ 1658:
                    message.unk3300ACJLANLBCGK = reader.uint32();
                    break;
                case /* uint32 Unk3300_HHKKEDDIGLA = 5 [json_name = "Unk3300HHKKEDDIGLA"];*/ 5:
                    message.unk3300HHKKEDDIGLA = reader.uint32();
                    break;
                case /* bool Unk3300_KJDEFIBKBPE = 4 [json_name = "Unk3300KJDEFIBKBPE"];*/ 4:
                    message.unk3300KJDEFIBKBPE = reader.bool();
                    break;
                case /* bool Unk3300_ICJOCDGLFFD = 15 [json_name = "Unk3300ICJOCDGLFFD"];*/ 15:
                    message.unk3300ICJOCDGLFFD = reader.bool();
                    break;
                case /* bool Unk3300_NMHHGNPKBEL = 1721 [json_name = "Unk3300NMHHGNPKBEL"];*/ 1721:
                    message.unk3300NMHHGNPKBEL = reader.bool();
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
    binaryReadMap9(map, reader, options) {
        let len = reader.uint32(), end = reader.pos + len, key, val;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case 1:
                    key = reader.uint32();
                    break;
                case 2:
                    val = reader.bool();
                    break;
                default: throw new globalThis.Error("unknown map entry field for field VintageMarketInfo.bargain_info_map");
            }
        }
        map[key ?? 0] = val ?? false;
    }
    internalBinaryWrite(message, writer, options) {
        /* map<uint32, bool> bargain_info_map = 9; */
        for (let k of Object.keys(message.bargainInfoMap))
            writer.tag(9, runtime_2.WireType.LengthDelimited).fork().tag(1, runtime_2.WireType.Varint).uint32(parseInt(k)).tag(2, runtime_2.WireType.Varint).bool(message.bargainInfoMap[k]).join();
        /* bool Unk3300_FJDIMCJEAOB = 8 [json_name = "Unk3300FJDIMCJEAOB"]; */
        if (message.unk3300FJDIMCJEAOB !== false)
            writer.tag(8, runtime_2.WireType.Varint).bool(message.unk3300FJDIMCJEAOB);
        /* repeated uint32 Unk3300_COKBOKAOCNJ = 1007 [json_name = "Unk3300COKBOKAOCNJ"]; */
        if (message.unk3300COKBOKAOCNJ.length) {
            writer.tag(1007, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.unk3300COKBOKAOCNJ.length; i++)
                writer.uint32(message.unk3300COKBOKAOCNJ[i]);
            writer.join();
        }
        /* uint32 help_skill_id = 760; */
        if (message.helpSkillId !== 0)
            writer.tag(760, runtime_2.WireType.Varint).uint32(message.helpSkillId);
        /* repeated uint32 Unk3300_ABHHACBDCFI = 7 [json_name = "Unk3300ABHHACBDCFI"]; */
        if (message.unk3300ABHHACBDCFI.length) {
            writer.tag(7, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.unk3300ABHHACBDCFI.length; i++)
                writer.uint32(message.unk3300ABHHACBDCFI[i]);
            writer.join();
        }
        /* repeated VintageMarketStoreInfo open_store_list = 2; */
        for (let i = 0; i < message.openStoreList.length; i++)
            VintageMarketStoreInfo_1.VintageMarketStoreInfo.internalBinaryWrite(message.openStoreList[i], writer.tag(2, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* repeated uint32 Unk3300_EDBJLBICEJF = 10 [json_name = "Unk3300EDBJLBICEJF"]; */
        if (message.unk3300EDBJLBICEJF.length) {
            writer.tag(10, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.unk3300EDBJLBICEJF.length; i++)
                writer.uint32(message.unk3300EDBJLBICEJF[i]);
            writer.join();
        }
        /* bool Unk3300_PAMKPAOCJJJ = 11 [json_name = "Unk3300PAMKPAOCJJJ"]; */
        if (message.unk3300PAMKPAOCJJJ !== false)
            writer.tag(11, runtime_2.WireType.Varint).bool(message.unk3300PAMKPAOCJJJ);
        /* uint32 Unk3300_FOPKAIIAMFM = 1826 [json_name = "Unk3300FOPKAIIAMFM"]; */
        if (message.unk3300FOPKAIIAMFM !== 0)
            writer.tag(1826, runtime_2.WireType.Varint).uint32(message.unk3300FOPKAIIAMFM);
        /* bool Unk3300_NBNOJJBNJPB = 470 [json_name = "Unk3300NBNOJJBNJPB"]; */
        if (message.unk3300NBNOJJBNJPB !== false)
            writer.tag(470, runtime_2.WireType.Varint).bool(message.unk3300NBNOJJBNJPB);
        /* VintageMarketDealInfo deal_info = 12; */
        if (message.dealInfo)
            VintageMarketDealInfo_1.VintageMarketDealInfo.internalBinaryWrite(message.dealInfo, writer.tag(12, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* uint32 store_round = 3; */
        if (message.storeRound !== 0)
            writer.tag(3, runtime_2.WireType.Varint).uint32(message.storeRound);
        /* repeated uint32 unlock_strategy_list = 13; */
        if (message.unlockStrategyList.length) {
            writer.tag(13, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.unlockStrategyList.length; i++)
                writer.uint32(message.unlockStrategyList[i]);
            writer.join();
        }
        /* repeated uint32 Unk3300_AIAMBBODLBO = 14 [json_name = "Unk3300AIAMBBODLBO"]; */
        if (message.unk3300AIAMBBODLBO.length) {
            writer.tag(14, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.unk3300AIAMBBODLBO.length; i++)
                writer.uint32(message.unk3300AIAMBBODLBO[i]);
            writer.join();
        }
        /* bool Unk3300_NDFHAGHBCFN = 6 [json_name = "Unk3300NDFHAGHBCFN"]; */
        if (message.unk3300NDFHAGHBCFN !== false)
            writer.tag(6, runtime_2.WireType.Varint).bool(message.unk3300NDFHAGHBCFN);
        /* uint32 Unk3300_LMNLHHPMAMN = 1 [json_name = "Unk3300LMNLHHPMAMN"]; */
        if (message.unk3300LMNLHHPMAMN !== 0)
            writer.tag(1, runtime_2.WireType.Varint).uint32(message.unk3300LMNLHHPMAMN);
        /* bool Unk3300_ALHLENELIEO = 1594 [json_name = "Unk3300ALHLENELIEO"]; */
        if (message.unk3300ALHLENELIEO !== false)
            writer.tag(1594, runtime_2.WireType.Varint).bool(message.unk3300ALHLENELIEO);
        /* uint32 Unk3300_ACJLANLBCGK = 1658 [json_name = "Unk3300ACJLANLBCGK"]; */
        if (message.unk3300ACJLANLBCGK !== 0)
            writer.tag(1658, runtime_2.WireType.Varint).uint32(message.unk3300ACJLANLBCGK);
        /* uint32 Unk3300_HHKKEDDIGLA = 5 [json_name = "Unk3300HHKKEDDIGLA"]; */
        if (message.unk3300HHKKEDDIGLA !== 0)
            writer.tag(5, runtime_2.WireType.Varint).uint32(message.unk3300HHKKEDDIGLA);
        /* bool Unk3300_KJDEFIBKBPE = 4 [json_name = "Unk3300KJDEFIBKBPE"]; */
        if (message.unk3300KJDEFIBKBPE !== false)
            writer.tag(4, runtime_2.WireType.Varint).bool(message.unk3300KJDEFIBKBPE);
        /* bool Unk3300_ICJOCDGLFFD = 15 [json_name = "Unk3300ICJOCDGLFFD"]; */
        if (message.unk3300ICJOCDGLFFD !== false)
            writer.tag(15, runtime_2.WireType.Varint).bool(message.unk3300ICJOCDGLFFD);
        /* bool Unk3300_NMHHGNPKBEL = 1721 [json_name = "Unk3300NMHHGNPKBEL"]; */
        if (message.unk3300NMHHGNPKBEL !== false)
            writer.tag(1721, runtime_2.WireType.Varint).bool(message.unk3300NMHHGNPKBEL);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message VintageMarketInfo
 */
exports.VintageMarketInfo = new VintageMarketInfo$Type();
