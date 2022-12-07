"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChessMysteryInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const ChessEntranceDetailInfo_1 = require("./ChessEntranceDetailInfo");
// @generated message type with reflection information, may provide speed optimized methods
class ChessMysteryInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("ChessMysteryInfo", [
            { no: 15, name: "exit_point_id_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "entrance_point_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "scalar", T: 13 /*ScalarType.UINT32*/ } },
            { no: 8, name: "detail_info_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "message", T: () => ChessEntranceDetailInfo_1.ChessEntranceDetailInfo } }
        ]);
    }
    create(value) {
        const message = { exitPointIdList: [], entrancePointMap: {}, detailInfoMap: {} };
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
                case /* repeated uint32 exit_point_id_list */ 15:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.exitPointIdList.push(reader.uint32());
                    else
                        message.exitPointIdList.push(reader.uint32());
                    break;
                case /* map<uint32, uint32> entrance_point_map */ 10:
                    this.binaryReadMap10(message.entrancePointMap, reader, options);
                    break;
                case /* map<uint32, ChessEntranceDetailInfo> detail_info_map */ 8:
                    this.binaryReadMap8(message.detailInfoMap, reader, options);
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
    binaryReadMap10(map, reader, options) {
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
                default: throw new globalThis.Error("unknown map entry field for field ChessMysteryInfo.entrance_point_map");
            }
        }
        map[key ?? 0] = val ?? 0;
    }
    binaryReadMap8(map, reader, options) {
        let len = reader.uint32(), end = reader.pos + len, key, val;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case 1:
                    key = reader.uint32();
                    break;
                case 2:
                    val = ChessEntranceDetailInfo_1.ChessEntranceDetailInfo.internalBinaryRead(reader, reader.uint32(), options);
                    break;
                default: throw new globalThis.Error("unknown map entry field for field ChessMysteryInfo.detail_info_map");
            }
        }
        map[key ?? 0] = val ?? ChessEntranceDetailInfo_1.ChessEntranceDetailInfo.create();
    }
    internalBinaryWrite(message, writer, options) {
        /* repeated uint32 exit_point_id_list = 15; */
        if (message.exitPointIdList.length) {
            writer.tag(15, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.exitPointIdList.length; i++)
                writer.uint32(message.exitPointIdList[i]);
            writer.join();
        }
        /* map<uint32, uint32> entrance_point_map = 10; */
        for (let k of Object.keys(message.entrancePointMap))
            writer.tag(10, runtime_2.WireType.LengthDelimited).fork().tag(1, runtime_2.WireType.Varint).uint32(parseInt(k)).tag(2, runtime_2.WireType.Varint).uint32(message.entrancePointMap[k]).join();
        /* map<uint32, ChessEntranceDetailInfo> detail_info_map = 8; */
        for (let k of Object.keys(message.detailInfoMap)) {
            writer.tag(8, runtime_2.WireType.LengthDelimited).fork().tag(1, runtime_2.WireType.Varint).uint32(parseInt(k));
            writer.tag(2, runtime_2.WireType.LengthDelimited).fork();
            ChessEntranceDetailInfo_1.ChessEntranceDetailInfo.internalBinaryWrite(message.detailInfoMap[k], writer, options);
            writer.join().join();
        }
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message ChessMysteryInfo
 */
exports.ChessMysteryInfo = new ChessMysteryInfo$Type();
