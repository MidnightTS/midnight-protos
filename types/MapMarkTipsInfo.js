"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MapMarkTipsInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const MapMarkTipsType_1 = require("./MapMarkTipsType");
// @generated message type with reflection information, may provide speed optimized methods
class MapMarkTipsInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.MapMarkTipsInfo", [
            { no: 1, name: "tips_type", kind: "enum", opt: true, T: () => ["com.midnights.game.MapMarkTipsType", MapMarkTipsType_1.MapMarkTipsType] },
            { no: 2, name: "point_id_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { pointIdList: [] };
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
                case /* optional com.midnights.game.MapMarkTipsType tips_type */ 1:
                    message.tipsType = reader.int32();
                    break;
                case /* repeated uint32 point_id_list */ 2:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.pointIdList.push(reader.uint32());
                    else
                        message.pointIdList.push(reader.uint32());
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
        /* optional com.midnights.game.MapMarkTipsType tips_type = 1; */
        if (message.tipsType !== undefined)
            writer.tag(1, runtime_2.WireType.Varint).int32(message.tipsType);
        /* repeated uint32 point_id_list = 2; */
        if (message.pointIdList.length) {
            writer.tag(2, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.pointIdList.length; i++)
                writer.uint32(message.pointIdList[i]);
            writer.join();
        }
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.MapMarkTipsInfo
 */
exports.MapMarkTipsInfo = new MapMarkTipsInfo$Type();
