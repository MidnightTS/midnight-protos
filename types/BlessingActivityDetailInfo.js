"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlessingActivityDetailInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class BlessingActivityDetailInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("BlessingActivityDetailInfo", [
            { no: 10, name: "cur_day_scan_num", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "content_close_time", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 1, name: "Unk3300_JLADHEKJPBP", kind: "scalar", jsonName: "Unk3300JLADHEKJPBP", T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "next_refresh_time", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "is_activated", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 7, name: "Unk3300_INOHLELBOAM", kind: "scalar", jsonName: "Unk3300INOHLELBOAM", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "is_content_closed", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 11, name: "pic_num_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "scalar", T: 13 /*ScalarType.UINT32*/ } }
        ]);
    }
    create(value) {
        const message = { curDayScanNum: 0, contentCloseTime: 0, unk3300JLADHEKJPBP: 0, nextRefreshTime: 0, isActivated: false, unk3300INOHLELBOAM: 0, isContentClosed: false, picNumMap: {} };
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
                case /* uint32 cur_day_scan_num */ 10:
                    message.curDayScanNum = reader.uint32();
                    break;
                case /* uint32 content_close_time */ 8:
                    message.contentCloseTime = reader.uint32();
                    break;
                case /* uint32 Unk3300_JLADHEKJPBP = 1 [json_name = "Unk3300JLADHEKJPBP"];*/ 1:
                    message.unk3300JLADHEKJPBP = reader.uint32();
                    break;
                case /* uint32 next_refresh_time */ 6:
                    message.nextRefreshTime = reader.uint32();
                    break;
                case /* bool is_activated */ 5:
                    message.isActivated = reader.bool();
                    break;
                case /* uint32 Unk3300_INOHLELBOAM = 7 [json_name = "Unk3300INOHLELBOAM"];*/ 7:
                    message.unk3300INOHLELBOAM = reader.uint32();
                    break;
                case /* bool is_content_closed */ 2:
                    message.isContentClosed = reader.bool();
                    break;
                case /* map<uint32, uint32> pic_num_map */ 11:
                    this.binaryReadMap11(message.picNumMap, reader, options);
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
                    val = reader.uint32();
                    break;
                default: throw new globalThis.Error("unknown map entry field for field BlessingActivityDetailInfo.pic_num_map");
            }
        }
        map[key ?? 0] = val ?? 0;
    }
    internalBinaryWrite(message, writer, options) {
        /* uint32 cur_day_scan_num = 10; */
        if (message.curDayScanNum !== 0)
            writer.tag(10, runtime_1.WireType.Varint).uint32(message.curDayScanNum);
        /* uint32 content_close_time = 8; */
        if (message.contentCloseTime !== 0)
            writer.tag(8, runtime_1.WireType.Varint).uint32(message.contentCloseTime);
        /* uint32 Unk3300_JLADHEKJPBP = 1 [json_name = "Unk3300JLADHEKJPBP"]; */
        if (message.unk3300JLADHEKJPBP !== 0)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.unk3300JLADHEKJPBP);
        /* uint32 next_refresh_time = 6; */
        if (message.nextRefreshTime !== 0)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.nextRefreshTime);
        /* bool is_activated = 5; */
        if (message.isActivated !== false)
            writer.tag(5, runtime_1.WireType.Varint).bool(message.isActivated);
        /* uint32 Unk3300_INOHLELBOAM = 7 [json_name = "Unk3300INOHLELBOAM"]; */
        if (message.unk3300INOHLELBOAM !== 0)
            writer.tag(7, runtime_1.WireType.Varint).uint32(message.unk3300INOHLELBOAM);
        /* bool is_content_closed = 2; */
        if (message.isContentClosed !== false)
            writer.tag(2, runtime_1.WireType.Varint).bool(message.isContentClosed);
        /* map<uint32, uint32> pic_num_map = 11; */
        for (let k of Object.keys(message.picNumMap))
            writer.tag(11, runtime_1.WireType.LengthDelimited).fork().tag(1, runtime_1.WireType.Varint).uint32(parseInt(k)).tag(2, runtime_1.WireType.Varint).uint32(message.picNumMap[k]).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message BlessingActivityDetailInfo
 */
exports.BlessingActivityDetailInfo = new BlessingActivityDetailInfo$Type();
