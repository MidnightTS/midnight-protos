"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DungeonWayPointNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class DungeonWayPointNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("DungeonWayPointNotify", [
            { no: 12, name: "is_add", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 2, name: "active_way_point_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { isAdd: false, activeWayPointList: [] };
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
                case /* bool is_add */ 12:
                    message.isAdd = reader.bool();
                    break;
                case /* repeated uint32 active_way_point_list */ 2:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.activeWayPointList.push(reader.uint32());
                    else
                        message.activeWayPointList.push(reader.uint32());
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
    internalBinaryWrite(message, writer, options) {
        /* bool is_add = 12; */
        if (message.isAdd !== false)
            writer.tag(12, runtime_2.WireType.Varint).bool(message.isAdd);
        /* repeated uint32 active_way_point_list = 2; */
        if (message.activeWayPointList.length) {
            writer.tag(2, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.activeWayPointList.length; i++)
                writer.uint32(message.activeWayPointList[i]);
            writer.join();
        }
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message DungeonWayPointNotify
 */
exports.DungeonWayPointNotify = new DungeonWayPointNotify$Type();
