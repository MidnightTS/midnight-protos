"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetMailItemRsp = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const EquipParam_1 = require("./EquipParam");
// @generated message type with reflection information, may provide speed optimized methods
class GetMailItemRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("GetMailItemRsp", [
            { no: 6, name: "item_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => EquipParam_1.EquipParam },
            { no: 3, name: "mail_id_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ }
        ]);
    }
    create(value) {
        const message = { itemList: [], mailIdList: [], retcode: 0 };
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
                case /* repeated EquipParam item_list */ 6:
                    message.itemList.push(EquipParam_1.EquipParam.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated uint32 mail_id_list */ 3:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.mailIdList.push(reader.uint32());
                    else
                        message.mailIdList.push(reader.uint32());
                    break;
                case /* int32 retcode */ 7:
                    message.retcode = reader.int32();
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
        /* repeated EquipParam item_list = 6; */
        for (let i = 0; i < message.itemList.length; i++)
            EquipParam_1.EquipParam.internalBinaryWrite(message.itemList[i], writer.tag(6, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* repeated uint32 mail_id_list = 3; */
        if (message.mailIdList.length) {
            writer.tag(3, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.mailIdList.length; i++)
                writer.uint32(message.mailIdList[i]);
            writer.join();
        }
        /* int32 retcode = 7; */
        if (message.retcode !== 0)
            writer.tag(7, runtime_2.WireType.Varint).int32(message.retcode);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message GetMailItemRsp
 */
exports.GetMailItemRsp = new GetMailItemRsp$Type();
