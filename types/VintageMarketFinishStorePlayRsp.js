"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VintageMarketFinishStorePlayRsp = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class VintageMarketFinishStorePlayRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("VintageMarketFinishStorePlayRsp", [
            { no: 10, name: "store_round", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "Unk3300_HJIHIOIGAPP", kind: "scalar", jsonName: "Unk3300HJIHIOIGAPP", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 2, name: "store_income_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "scalar", T: 13 /*ScalarType.UINT32*/ } },
            { no: 6, name: "Unk3300_DJILELFHFHJ", kind: "scalar", jsonName: "Unk3300DJILELFHFHJ", T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "Unk3300_OCIMKEPJOOL", kind: "scalar", jsonName: "Unk3300OCIMKEPJOOL", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "Unk3300_GCDNOPJEIBG", kind: "scalar", jsonName: "Unk3300GCDNOPJEIBG", T: 13 /*ScalarType.UINT32*/ },
            { no: 1, name: "Unk3300_BDAIONEPKIK", kind: "scalar", jsonName: "Unk3300BDAIONEPKIK", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "Unk3300_DGECJOKMDGN", kind: "scalar", jsonName: "Unk3300DGECJOKMDGN", T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "Unk3300_DLNFCBPDBBH", kind: "scalar", jsonName: "Unk3300DLNFCBPDBBH", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { storeRound: 0, unk3300HJIHIOIGAPP: [], retcode: 0, storeIncomeMap: {}, unk3300DJILELFHFHJ: 0, unk3300OCIMKEPJOOL: [], unk3300GCDNOPJEIBG: 0, unk3300BDAIONEPKIK: [], unk3300DGECJOKMDGN: 0, unk3300DLNFCBPDBBH: 0 };
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
                case /* uint32 store_round */ 10:
                    message.storeRound = reader.uint32();
                    break;
                case /* repeated uint32 Unk3300_HJIHIOIGAPP = 15 [json_name = "Unk3300HJIHIOIGAPP"];*/ 15:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.unk3300HJIHIOIGAPP.push(reader.uint32());
                    else
                        message.unk3300HJIHIOIGAPP.push(reader.uint32());
                    break;
                case /* int32 retcode */ 9:
                    message.retcode = reader.int32();
                    break;
                case /* map<uint32, uint32> store_income_map */ 2:
                    this.binaryReadMap2(message.storeIncomeMap, reader, options);
                    break;
                case /* uint32 Unk3300_DJILELFHFHJ = 6 [json_name = "Unk3300DJILELFHFHJ"];*/ 6:
                    message.unk3300DJILELFHFHJ = reader.uint32();
                    break;
                case /* repeated uint32 Unk3300_OCIMKEPJOOL = 3 [json_name = "Unk3300OCIMKEPJOOL"];*/ 3:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.unk3300OCIMKEPJOOL.push(reader.uint32());
                    else
                        message.unk3300OCIMKEPJOOL.push(reader.uint32());
                    break;
                case /* uint32 Unk3300_GCDNOPJEIBG = 4 [json_name = "Unk3300GCDNOPJEIBG"];*/ 4:
                    message.unk3300GCDNOPJEIBG = reader.uint32();
                    break;
                case /* repeated uint32 Unk3300_BDAIONEPKIK = 1 [json_name = "Unk3300BDAIONEPKIK"];*/ 1:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.unk3300BDAIONEPKIK.push(reader.uint32());
                    else
                        message.unk3300BDAIONEPKIK.push(reader.uint32());
                    break;
                case /* uint32 Unk3300_DGECJOKMDGN = 11 [json_name = "Unk3300DGECJOKMDGN"];*/ 11:
                    message.unk3300DGECJOKMDGN = reader.uint32();
                    break;
                case /* uint32 Unk3300_DLNFCBPDBBH = 14 [json_name = "Unk3300DLNFCBPDBBH"];*/ 14:
                    message.unk3300DLNFCBPDBBH = reader.uint32();
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
    binaryReadMap2(map, reader, options) {
        let len = reader.uint32(), end = reader.pos + len, key, val;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case 1:
                    key = reader.uint32();
                    break;
                case 2:
                    val = reader.uint32();
                    break;
                default: throw new globalThis.Error("unknown map entry field for field VintageMarketFinishStorePlayRsp.store_income_map");
            }
        }
        map[key ?? 0] = val ?? 0;
    }
    internalBinaryWrite(message, writer, options) {
        /* uint32 store_round = 10; */
        if (message.storeRound !== 0)
            writer.tag(10, runtime_2.WireType.Varint).uint32(message.storeRound);
        /* repeated uint32 Unk3300_HJIHIOIGAPP = 15 [json_name = "Unk3300HJIHIOIGAPP"]; */
        if (message.unk3300HJIHIOIGAPP.length) {
            writer.tag(15, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.unk3300HJIHIOIGAPP.length; i++)
                writer.uint32(message.unk3300HJIHIOIGAPP[i]);
            writer.join();
        }
        /* int32 retcode = 9; */
        if (message.retcode !== 0)
            writer.tag(9, runtime_2.WireType.Varint).int32(message.retcode);
        /* map<uint32, uint32> store_income_map = 2; */
        for (let k of Object.keys(message.storeIncomeMap))
            writer.tag(2, runtime_2.WireType.LengthDelimited).fork().tag(1, runtime_2.WireType.Varint).uint32(parseInt(k)).tag(2, runtime_2.WireType.Varint).uint32(message.storeIncomeMap[k]).join();
        /* uint32 Unk3300_DJILELFHFHJ = 6 [json_name = "Unk3300DJILELFHFHJ"]; */
        if (message.unk3300DJILELFHFHJ !== 0)
            writer.tag(6, runtime_2.WireType.Varint).uint32(message.unk3300DJILELFHFHJ);
        /* repeated uint32 Unk3300_OCIMKEPJOOL = 3 [json_name = "Unk3300OCIMKEPJOOL"]; */
        if (message.unk3300OCIMKEPJOOL.length) {
            writer.tag(3, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.unk3300OCIMKEPJOOL.length; i++)
                writer.uint32(message.unk3300OCIMKEPJOOL[i]);
            writer.join();
        }
        /* uint32 Unk3300_GCDNOPJEIBG = 4 [json_name = "Unk3300GCDNOPJEIBG"]; */
        if (message.unk3300GCDNOPJEIBG !== 0)
            writer.tag(4, runtime_2.WireType.Varint).uint32(message.unk3300GCDNOPJEIBG);
        /* repeated uint32 Unk3300_BDAIONEPKIK = 1 [json_name = "Unk3300BDAIONEPKIK"]; */
        if (message.unk3300BDAIONEPKIK.length) {
            writer.tag(1, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.unk3300BDAIONEPKIK.length; i++)
                writer.uint32(message.unk3300BDAIONEPKIK[i]);
            writer.join();
        }
        /* uint32 Unk3300_DGECJOKMDGN = 11 [json_name = "Unk3300DGECJOKMDGN"]; */
        if (message.unk3300DGECJOKMDGN !== 0)
            writer.tag(11, runtime_2.WireType.Varint).uint32(message.unk3300DGECJOKMDGN);
        /* uint32 Unk3300_DLNFCBPDBBH = 14 [json_name = "Unk3300DLNFCBPDBBH"]; */
        if (message.unk3300DLNFCBPDBBH !== 0)
            writer.tag(14, runtime_2.WireType.Varint).uint32(message.unk3300DLNFCBPDBBH);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message VintageMarketFinishStorePlayRsp
 */
exports.VintageMarketFinishStorePlayRsp = new VintageMarketFinishStorePlayRsp$Type();
