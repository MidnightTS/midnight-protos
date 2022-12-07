"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VintageActivityDetailInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const VintageMarketInfo_1 = require("./VintageMarketInfo");
const VintageCampChallengeStageData_1 = require("./VintageCampChallengeStageData");
const VintageBoothUsedItemData_1 = require("./VintageBoothUsedItemData");
const VintageHuntingStageData_1 = require("./VintageHuntingStageData");
const VintagePresentStageData_1 = require("./VintagePresentStageData");
// @generated message type with reflection information, may provide speed optimized methods
class VintageActivityDetailInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("VintageActivityDetailInfo", [
            { no: 11, name: "Unk3300_PCIIGPJJHGF", kind: "map", jsonName: "Unk3300PCIIGPJJHGF", K: 13 /*ScalarType.UINT32*/, V: { kind: "message", T: () => VintagePresentStageData_1.VintagePresentStageData } },
            { no: 13, name: "is_content_closed", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 10, name: "Unk3300_EHHPFKIOKOO", kind: "map", jsonName: "Unk3300EHHPFKIOKOO", K: 13 /*ScalarType.UINT32*/, V: { kind: "message", T: () => VintageHuntingStageData_1.VintageHuntingStageData } },
            { no: 9, name: "booth_data", kind: "message", T: () => VintageBoothUsedItemData_1.VintageBoothUsedItemData },
            { no: 2, name: "Unk3300_NPKMDFCLGBJ", kind: "map", jsonName: "Unk3300NPKMDFCLGBJ", K: 13 /*ScalarType.UINT32*/, V: { kind: "message", T: () => VintageCampChallengeStageData_1.VintageCampChallengeStageData } },
            { no: 14, name: "market_info", kind: "message", T: () => VintageMarketInfo_1.VintageMarketInfo }
        ]);
    }
    create(value) {
        const message = { unk3300PCIIGPJJHGF: {}, isContentClosed: false, unk3300EHHPFKIOKOO: {}, unk3300NPKMDFCLGBJ: {} };
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
                case /* map<uint32, VintagePresentStageData> Unk3300_PCIIGPJJHGF = 11 [json_name = "Unk3300PCIIGPJJHGF"];*/ 11:
                    this.binaryReadMap11(message.unk3300PCIIGPJJHGF, reader, options);
                    break;
                case /* bool is_content_closed */ 13:
                    message.isContentClosed = reader.bool();
                    break;
                case /* map<uint32, VintageHuntingStageData> Unk3300_EHHPFKIOKOO = 10 [json_name = "Unk3300EHHPFKIOKOO"];*/ 10:
                    this.binaryReadMap10(message.unk3300EHHPFKIOKOO, reader, options);
                    break;
                case /* VintageBoothUsedItemData booth_data */ 9:
                    message.boothData = VintageBoothUsedItemData_1.VintageBoothUsedItemData.internalBinaryRead(reader, reader.uint32(), options, message.boothData);
                    break;
                case /* map<uint32, VintageCampChallengeStageData> Unk3300_NPKMDFCLGBJ = 2 [json_name = "Unk3300NPKMDFCLGBJ"];*/ 2:
                    this.binaryReadMap2(message.unk3300NPKMDFCLGBJ, reader, options);
                    break;
                case /* VintageMarketInfo market_info */ 14:
                    message.marketInfo = VintageMarketInfo_1.VintageMarketInfo.internalBinaryRead(reader, reader.uint32(), options, message.marketInfo);
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
    binaryReadMap11(map, reader, options) {
        let len = reader.uint32(), end = reader.pos + len, key, val;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case 1:
                    key = reader.uint32();
                    break;
                case 2:
                    val = VintagePresentStageData_1.VintagePresentStageData.internalBinaryRead(reader, reader.uint32(), options);
                    break;
                default: throw new globalThis.Error("unknown map entry field for field VintageActivityDetailInfo.Unk3300_PCIIGPJJHGF");
            }
        }
        map[key ?? 0] = val ?? VintagePresentStageData_1.VintagePresentStageData.create();
    }
    binaryReadMap10(map, reader, options) {
        let len = reader.uint32(), end = reader.pos + len, key, val;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case 1:
                    key = reader.uint32();
                    break;
                case 2:
                    val = VintageHuntingStageData_1.VintageHuntingStageData.internalBinaryRead(reader, reader.uint32(), options);
                    break;
                default: throw new globalThis.Error("unknown map entry field for field VintageActivityDetailInfo.Unk3300_EHHPFKIOKOO");
            }
        }
        map[key ?? 0] = val ?? VintageHuntingStageData_1.VintageHuntingStageData.create();
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
                    val = VintageCampChallengeStageData_1.VintageCampChallengeStageData.internalBinaryRead(reader, reader.uint32(), options);
                    break;
                default: throw new globalThis.Error("unknown map entry field for field VintageActivityDetailInfo.Unk3300_NPKMDFCLGBJ");
            }
        }
        map[key ?? 0] = val ?? VintageCampChallengeStageData_1.VintageCampChallengeStageData.create();
    }
    internalBinaryWrite(message, writer, options) {
        /* map<uint32, VintagePresentStageData> Unk3300_PCIIGPJJHGF = 11 [json_name = "Unk3300PCIIGPJJHGF"]; */
        for (let k of Object.keys(message.unk3300PCIIGPJJHGF)) {
            writer.tag(11, runtime_1.WireType.LengthDelimited).fork().tag(1, runtime_1.WireType.Varint).uint32(parseInt(k));
            writer.tag(2, runtime_1.WireType.LengthDelimited).fork();
            VintagePresentStageData_1.VintagePresentStageData.internalBinaryWrite(message.unk3300PCIIGPJJHGF[k], writer, options);
            writer.join().join();
        }
        /* bool is_content_closed = 13; */
        if (message.isContentClosed !== false)
            writer.tag(13, runtime_1.WireType.Varint).bool(message.isContentClosed);
        /* map<uint32, VintageHuntingStageData> Unk3300_EHHPFKIOKOO = 10 [json_name = "Unk3300EHHPFKIOKOO"]; */
        for (let k of Object.keys(message.unk3300EHHPFKIOKOO)) {
            writer.tag(10, runtime_1.WireType.LengthDelimited).fork().tag(1, runtime_1.WireType.Varint).uint32(parseInt(k));
            writer.tag(2, runtime_1.WireType.LengthDelimited).fork();
            VintageHuntingStageData_1.VintageHuntingStageData.internalBinaryWrite(message.unk3300EHHPFKIOKOO[k], writer, options);
            writer.join().join();
        }
        /* VintageBoothUsedItemData booth_data = 9; */
        if (message.boothData)
            VintageBoothUsedItemData_1.VintageBoothUsedItemData.internalBinaryWrite(message.boothData, writer.tag(9, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* map<uint32, VintageCampChallengeStageData> Unk3300_NPKMDFCLGBJ = 2 [json_name = "Unk3300NPKMDFCLGBJ"]; */
        for (let k of Object.keys(message.unk3300NPKMDFCLGBJ)) {
            writer.tag(2, runtime_1.WireType.LengthDelimited).fork().tag(1, runtime_1.WireType.Varint).uint32(parseInt(k));
            writer.tag(2, runtime_1.WireType.LengthDelimited).fork();
            VintageCampChallengeStageData_1.VintageCampChallengeStageData.internalBinaryWrite(message.unk3300NPKMDFCLGBJ[k], writer, options);
            writer.join().join();
        }
        /* VintageMarketInfo market_info = 14; */
        if (message.marketInfo)
            VintageMarketInfo_1.VintageMarketInfo.internalBinaryWrite(message.marketInfo, writer.tag(14, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message VintageActivityDetailInfo
 */
exports.VintageActivityDetailInfo = new VintageActivityDetailInfo$Type();
