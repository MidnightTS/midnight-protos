"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomDungeonAbstract = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class CustomDungeonAbstract$Type extends runtime_5.MessageType {
    constructor() {
        super("CustomDungeonAbstract", [
            { no: 7, name: "Unk3300_EJGBHGHLFPI", kind: "scalar", jsonName: "Unk3300EJGBHGHLFPI", T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "last_publish_time", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "brick_statistics_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "scalar", T: 13 /*ScalarType.UINT32*/ } },
            { no: 8, name: "first_publish_time", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "Unk3300_JPFIHKECLMF", kind: "scalar", jsonName: "Unk3300JPFIHKECLMF", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { unk3300EJGBHGHLFPI: 0, lastPublishTime: 0, brickStatisticsMap: {}, firstPublishTime: 0, unk3300JPFIHKECLMF: 0 };
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
                case /* uint32 Unk3300_EJGBHGHLFPI = 7 [json_name = "Unk3300EJGBHGHLFPI"];*/ 7:
                    message.unk3300EJGBHGHLFPI = reader.uint32();
                    break;
                case /* uint32 last_publish_time */ 12:
                    message.lastPublishTime = reader.uint32();
                    break;
                case /* map<uint32, uint32> brick_statistics_map */ 2:
                    this.binaryReadMap2(message.brickStatisticsMap, reader, options);
                    break;
                case /* uint32 first_publish_time */ 8:
                    message.firstPublishTime = reader.uint32();
                    break;
                case /* uint32 Unk3300_JPFIHKECLMF = 4 [json_name = "Unk3300JPFIHKECLMF"];*/ 4:
                    message.unk3300JPFIHKECLMF = reader.uint32();
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
                default: throw new globalThis.Error("unknown map entry field for field CustomDungeonAbstract.brick_statistics_map");
            }
        }
        map[key ?? 0] = val ?? 0;
    }
    internalBinaryWrite(message, writer, options) {
        /* uint32 Unk3300_EJGBHGHLFPI = 7 [json_name = "Unk3300EJGBHGHLFPI"]; */
        if (message.unk3300EJGBHGHLFPI !== 0)
            writer.tag(7, runtime_1.WireType.Varint).uint32(message.unk3300EJGBHGHLFPI);
        /* uint32 last_publish_time = 12; */
        if (message.lastPublishTime !== 0)
            writer.tag(12, runtime_1.WireType.Varint).uint32(message.lastPublishTime);
        /* map<uint32, uint32> brick_statistics_map = 2; */
        for (let k of Object.keys(message.brickStatisticsMap))
            writer.tag(2, runtime_1.WireType.LengthDelimited).fork().tag(1, runtime_1.WireType.Varint).uint32(parseInt(k)).tag(2, runtime_1.WireType.Varint).uint32(message.brickStatisticsMap[k]).join();
        /* uint32 first_publish_time = 8; */
        if (message.firstPublishTime !== 0)
            writer.tag(8, runtime_1.WireType.Varint).uint32(message.firstPublishTime);
        /* uint32 Unk3300_JPFIHKECLMF = 4 [json_name = "Unk3300JPFIHKECLMF"]; */
        if (message.unk3300JPFIHKECLMF !== 0)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.unk3300JPFIHKECLMF);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message CustomDungeonAbstract
 */
exports.CustomDungeonAbstract = new CustomDungeonAbstract$Type();
