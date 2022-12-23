"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TowerLevelStarCondNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const TowerLevelStarCondData_1 = require("./TowerLevelStarCondData");
// @generated message type with reflection information, may provide speed optimized methods
class TowerLevelStarCondNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("TowerLevelStarCondNotify", [
            { no: 1, name: "cond_data_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => TowerLevelStarCondData_1.TowerLevelStarCondData },
            { no: 8, name: "level_index", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "floor_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { condDataList: [], levelIndex: 0, floorId: 0 };
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
                case /* repeated TowerLevelStarCondData cond_data_list */ 1:
                    message.condDataList.push(TowerLevelStarCondData_1.TowerLevelStarCondData.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* uint32 level_index */ 8:
                    message.levelIndex = reader.uint32();
                    break;
                case /* uint32 floor_id */ 10:
                    message.floorId = reader.uint32();
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
        /* repeated TowerLevelStarCondData cond_data_list = 1; */
        for (let i = 0; i < message.condDataList.length; i++)
            TowerLevelStarCondData_1.TowerLevelStarCondData.internalBinaryWrite(message.condDataList[i], writer.tag(1, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* uint32 level_index = 8; */
        if (message.levelIndex !== 0)
            writer.tag(8, runtime_1.WireType.Varint).uint32(message.levelIndex);
        /* uint32 floor_id = 10; */
        if (message.floorId !== 0)
            writer.tag(10, runtime_1.WireType.Varint).uint32(message.floorId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message TowerLevelStarCondNotify
 */
exports.TowerLevelStarCondNotify = new TowerLevelStarCondNotify$Type();
