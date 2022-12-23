"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VintagePresentStageData = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const VintagePresentLevelData_1 = require("./VintagePresentLevelData");
// @generated message type with reflection information, may provide speed optimized methods
class VintagePresentStageData$Type extends runtime_5.MessageType {
    constructor() {
        super("VintagePresentStageData", [
            { no: 4, name: "is_open", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 10, name: "is_finish", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 11, name: "present_level_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "message", T: () => VintagePresentLevelData_1.VintagePresentLevelData } },
            { no: 8, name: "open_time", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 1, name: "stage_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { isOpen: false, isFinish: false, presentLevelMap: {}, openTime: 0, stageId: 0 };
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
                case /* bool is_open */ 4:
                    message.isOpen = reader.bool();
                    break;
                case /* bool is_finish */ 10:
                    message.isFinish = reader.bool();
                    break;
                case /* map<uint32, VintagePresentLevelData> present_level_map */ 11:
                    this.binaryReadMap11(message.presentLevelMap, reader, options);
                    break;
                case /* uint32 open_time */ 8:
                    message.openTime = reader.uint32();
                    break;
                case /* uint32 stage_id */ 1:
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
    binaryReadMap11(map, reader, options) {
        let len = reader.uint32(), end = reader.pos + len, key, val;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case 1:
                    key = reader.uint32();
                    break;
                case 2:
                    val = VintagePresentLevelData_1.VintagePresentLevelData.internalBinaryRead(reader, reader.uint32(), options);
                    break;
                default: throw new globalThis.Error("unknown map entry field for field VintagePresentStageData.present_level_map");
            }
        }
        map[key ?? 0] = val ?? VintagePresentLevelData_1.VintagePresentLevelData.create();
    }
    internalBinaryWrite(message, writer, options) {
        /* bool is_open = 4; */
        if (message.isOpen !== false)
            writer.tag(4, runtime_1.WireType.Varint).bool(message.isOpen);
        /* bool is_finish = 10; */
        if (message.isFinish !== false)
            writer.tag(10, runtime_1.WireType.Varint).bool(message.isFinish);
        /* map<uint32, VintagePresentLevelData> present_level_map = 11; */
        for (let k of Object.keys(message.presentLevelMap)) {
            writer.tag(11, runtime_1.WireType.LengthDelimited).fork().tag(1, runtime_1.WireType.Varint).uint32(parseInt(k));
            writer.tag(2, runtime_1.WireType.LengthDelimited).fork();
            VintagePresentLevelData_1.VintagePresentLevelData.internalBinaryWrite(message.presentLevelMap[k], writer, options);
            writer.join().join();
        }
        /* uint32 open_time = 8; */
        if (message.openTime !== 0)
            writer.tag(8, runtime_1.WireType.Varint).uint32(message.openTime);
        /* uint32 stage_id = 1; */
        if (message.stageId !== 0)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.stageId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message VintagePresentStageData
 */
exports.VintagePresentStageData = new VintagePresentStageData$Type();
