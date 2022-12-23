"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ViewCodexRsp = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const CodexTypeData_1 = require("./CodexTypeData");
// @generated message type with reflection information, may provide speed optimized methods
class ViewCodexRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("ViewCodexRsp", [
            { no: 12, name: "type_data_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => CodexTypeData_1.CodexTypeData },
            { no: 3, name: "Unk3300_IDNOLALHFFA", kind: "scalar", jsonName: "Unk3300IDNOLALHFFA", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "Unk3300_CBGDAAOBGNB", kind: "scalar", jsonName: "Unk3300CBGDAAOBGNB", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 14, name: "recent_viewed_pushtips_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { typeDataList: [], unk3300IDNOLALHFFA: [], unk3300CBGDAAOBGNB: [], retcode: 0, recentViewedPushtipsList: [] };
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
                case /* repeated CodexTypeData type_data_list */ 12:
                    message.typeDataList.push(CodexTypeData_1.CodexTypeData.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated uint32 Unk3300_IDNOLALHFFA = 3 [json_name = "Unk3300IDNOLALHFFA"];*/ 3:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.unk3300IDNOLALHFFA.push(reader.uint32());
                    else
                        message.unk3300IDNOLALHFFA.push(reader.uint32());
                    break;
                case /* repeated uint32 Unk3300_CBGDAAOBGNB = 10 [json_name = "Unk3300CBGDAAOBGNB"];*/ 10:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.unk3300CBGDAAOBGNB.push(reader.uint32());
                    else
                        message.unk3300CBGDAAOBGNB.push(reader.uint32());
                    break;
                case /* int32 retcode */ 11:
                    message.retcode = reader.int32();
                    break;
                case /* repeated uint32 recent_viewed_pushtips_list */ 14:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.recentViewedPushtipsList.push(reader.uint32());
                    else
                        message.recentViewedPushtipsList.push(reader.uint32());
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
        /* repeated CodexTypeData type_data_list = 12; */
        for (let i = 0; i < message.typeDataList.length; i++)
            CodexTypeData_1.CodexTypeData.internalBinaryWrite(message.typeDataList[i], writer.tag(12, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* repeated uint32 Unk3300_IDNOLALHFFA = 3 [json_name = "Unk3300IDNOLALHFFA"]; */
        if (message.unk3300IDNOLALHFFA.length) {
            writer.tag(3, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.unk3300IDNOLALHFFA.length; i++)
                writer.uint32(message.unk3300IDNOLALHFFA[i]);
            writer.join();
        }
        /* repeated uint32 Unk3300_CBGDAAOBGNB = 10 [json_name = "Unk3300CBGDAAOBGNB"]; */
        if (message.unk3300CBGDAAOBGNB.length) {
            writer.tag(10, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.unk3300CBGDAAOBGNB.length; i++)
                writer.uint32(message.unk3300CBGDAAOBGNB[i]);
            writer.join();
        }
        /* int32 retcode = 11; */
        if (message.retcode !== 0)
            writer.tag(11, runtime_2.WireType.Varint).int32(message.retcode);
        /* repeated uint32 recent_viewed_pushtips_list = 14; */
        if (message.recentViewedPushtipsList.length) {
            writer.tag(14, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.recentViewedPushtipsList.length; i++)
                writer.uint32(message.recentViewedPushtipsList[i]);
            writer.join();
        }
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message ViewCodexRsp
 */
exports.ViewCodexRsp = new ViewCodexRsp$Type();
