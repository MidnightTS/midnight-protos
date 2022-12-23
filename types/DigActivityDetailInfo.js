"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DigActivityDetailInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const DigMarkPoint_1 = require("./DigMarkPoint");
// @generated message type with reflection information, may provide speed optimized methods
class DigActivityDetailInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("DigActivityDetailInfo", [
            { no: 3, name: "stage_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "dig_mark_point_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => DigMarkPoint_1.DigMarkPoint },
            { no: 5, name: "stage_id_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { stageId: 0, digMarkPointList: [], stageIdList: [] };
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
                case /* uint32 stage_id */ 3:
                    message.stageId = reader.uint32();
                    break;
                case /* repeated DigMarkPoint dig_mark_point_list */ 12:
                    message.digMarkPointList.push(DigMarkPoint_1.DigMarkPoint.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated uint32 stage_id_list */ 5:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.stageIdList.push(reader.uint32());
                    else
                        message.stageIdList.push(reader.uint32());
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
        /* uint32 stage_id = 3; */
        if (message.stageId !== 0)
            writer.tag(3, runtime_2.WireType.Varint).uint32(message.stageId);
        /* repeated DigMarkPoint dig_mark_point_list = 12; */
        for (let i = 0; i < message.digMarkPointList.length; i++)
            DigMarkPoint_1.DigMarkPoint.internalBinaryWrite(message.digMarkPointList[i], writer.tag(12, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* repeated uint32 stage_id_list = 5; */
        if (message.stageIdList.length) {
            writer.tag(5, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.stageIdList.length; i++)
                writer.uint32(message.stageIdList[i]);
            writer.join();
        }
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message DigActivityDetailInfo
 */
exports.DigActivityDetailInfo = new DigActivityDetailInfo$Type();
