"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlantFlowerActivityDetailInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class PlantFlowerActivityDetailInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("PlantFlowerActivityDetailInfo", [
            { no: 1, name: "day_index", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "today_seed_reward_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "is_content_closed", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 9, name: "Unk3300_EPMKDFOBLFK", kind: "map", jsonName: "Unk3300EPMKDFOBLFK", K: 13 /*ScalarType.UINT32*/, V: { kind: "scalar", T: 13 /*ScalarType.UINT32*/ } },
            { no: 5, name: "Unk3300_ELAIBMDIBFJ", kind: "map", jsonName: "Unk3300ELAIBMDIBFJ", K: 13 /*ScalarType.UINT32*/, V: { kind: "scalar", T: 13 /*ScalarType.UINT32*/ } },
            { no: 8, name: "is_today_has_awarded", kind: "scalar", T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = { dayIndex: 0, todaySeedRewardId: 0, isContentClosed: false, unk3300EPMKDFOBLFK: {}, unk3300ELAIBMDIBFJ: {}, isTodayHasAwarded: false };
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
                case /* uint32 day_index */ 1:
                    message.dayIndex = reader.uint32();
                    break;
                case /* uint32 today_seed_reward_id */ 15:
                    message.todaySeedRewardId = reader.uint32();
                    break;
                case /* bool is_content_closed */ 3:
                    message.isContentClosed = reader.bool();
                    break;
                case /* map<uint32, uint32> Unk3300_EPMKDFOBLFK = 9 [json_name = "Unk3300EPMKDFOBLFK"];*/ 9:
                    this.binaryReadMap9(message.unk3300EPMKDFOBLFK, reader, options);
                    break;
                case /* map<uint32, uint32> Unk3300_ELAIBMDIBFJ = 5 [json_name = "Unk3300ELAIBMDIBFJ"];*/ 5:
                    this.binaryReadMap5(message.unk3300ELAIBMDIBFJ, reader, options);
                    break;
                case /* bool is_today_has_awarded */ 8:
                    message.isTodayHasAwarded = reader.bool();
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
    binaryReadMap9(map, reader, options) {
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
                default: throw new globalThis.Error("unknown map entry field for field PlantFlowerActivityDetailInfo.Unk3300_EPMKDFOBLFK");
            }
        }
        map[key ?? 0] = val ?? 0;
    }
    binaryReadMap5(map, reader, options) {
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
                default: throw new globalThis.Error("unknown map entry field for field PlantFlowerActivityDetailInfo.Unk3300_ELAIBMDIBFJ");
            }
        }
        map[key ?? 0] = val ?? 0;
    }
    internalBinaryWrite(message, writer, options) {
        /* uint32 day_index = 1; */
        if (message.dayIndex !== 0)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.dayIndex);
        /* uint32 today_seed_reward_id = 15; */
        if (message.todaySeedRewardId !== 0)
            writer.tag(15, runtime_1.WireType.Varint).uint32(message.todaySeedRewardId);
        /* bool is_content_closed = 3; */
        if (message.isContentClosed !== false)
            writer.tag(3, runtime_1.WireType.Varint).bool(message.isContentClosed);
        /* map<uint32, uint32> Unk3300_EPMKDFOBLFK = 9 [json_name = "Unk3300EPMKDFOBLFK"]; */
        for (let k of Object.keys(message.unk3300EPMKDFOBLFK))
            writer.tag(9, runtime_1.WireType.LengthDelimited).fork().tag(1, runtime_1.WireType.Varint).uint32(parseInt(k)).tag(2, runtime_1.WireType.Varint).uint32(message.unk3300EPMKDFOBLFK[k]).join();
        /* map<uint32, uint32> Unk3300_ELAIBMDIBFJ = 5 [json_name = "Unk3300ELAIBMDIBFJ"]; */
        for (let k of Object.keys(message.unk3300ELAIBMDIBFJ))
            writer.tag(5, runtime_1.WireType.LengthDelimited).fork().tag(1, runtime_1.WireType.Varint).uint32(parseInt(k)).tag(2, runtime_1.WireType.Varint).uint32(message.unk3300ELAIBMDIBFJ[k]).join();
        /* bool is_today_has_awarded = 8; */
        if (message.isTodayHasAwarded !== false)
            writer.tag(8, runtime_1.WireType.Varint).bool(message.isTodayHasAwarded);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message PlantFlowerActivityDetailInfo
 */
exports.PlantFlowerActivityDetailInfo = new PlantFlowerActivityDetailInfo$Type();
